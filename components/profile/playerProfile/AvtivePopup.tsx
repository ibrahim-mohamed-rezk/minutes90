import { useState } from "react";
import { toast } from "react-toastify";
import { useAppSelector } from "@/libs/store/hooks";
import { useTranslations } from "next-intl";
import { getApi } from "@/libs/axios/backendServer";

interface ActivePopupProps {
  show: boolean;
  onClose: () => void;
  playerId?: number;
}

const ActivePopup = ({ show, onClose, playerId }: ActivePopupProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { token } = useAppSelector((state) => state.user);
  const t = useTranslations("player_profile");

  const handleActivate = async () => {
    if (!playerId) return;

    setIsSubmitting(true);
    try {
      await getApi(
        `is-requested/${playerId}`,
        {},
        { Authorization: `Bearer ${token}` }
      );
      setIsSuccess(true);
    } catch (error) {
      console.error(error);
      toast.error(t("Activation_Request_Failed"));
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center px-[10px] justify-center z-50">
      <div className="bg-black border border-[#b0b0b1] overflow-hidden rounded-lg max-w-lg w-full ">
        <h2 className="text-xl bg-green-600 border-b border-[#b0b0b1] py-4 w-full text-center font-bold">
          {t("active_profile")}
        </h2>
        {!isSuccess ? (
          <>
            <p className="mb-6 pt-4 text-center">
              {t("Activate_Profile_Message")}
            </p>
            <div className="flex justify-center items-center py-4 gap-3">
              <button
                className="px-4 py-2 border rounded-md bg-red-500 hover:bg-red-600"
                onClick={onClose}
                disabled={isSubmitting}
              >
                {t("cancel")}
              </button>
              <button
                className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 disabled:bg-green-300"
                onClick={handleActivate}
                disabled={isSubmitting}
              >
                {isSubmitting ? t("Submitting") : t("Send_Request")}
              </button>
            </div>
          </>
        ) : (
          <>
            <p className="mb-6 pt-4 text-center">{t("Request_Sent_Message")}</p>
            <div className="flex py-4 justify-center items-center">
              <button
                className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
                onClick={onClose}
              >
                {t("close")}
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ActivePopup;
