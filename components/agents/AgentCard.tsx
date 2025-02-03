import React from 'react'

// const AgentCard = ({ agent }: { agent: any }) => {
const AgentCard = () => {
  return (
    <div className="w-[250px] h-[350px] relative bg-[#edce38] rounded-2xl overflow-hidden shadow-lg">
      <div className="w-[230px] h-[300px] left-[10px] top-[10px] absolute bg-white rounded-2xl overflow-hidden shadow-md">
        <div className="w-[12px] h-[12px] left-[30px] top-[270px] absolute">
          <div className="w-[12px] h-[12px] left-0 top-0 absolute bg-[#239d60] rounded-full"></div>
        </div>
        <div className="left-[90px] top-[275px] absolute flex flex-col items-center gap-[2px]">
          <div className="w-[80px] h-[25px] bg-[#edce38] rounded-tr-md rounded-br-md flex items-center justify-center">
            <div className="text-white text-[10px] font-bold font-['Montserrat']">Players Added</div>
          </div>
          <div className="w-[80px] h-[25px] bg-[#edce38] rounded-tr-md rounded-br-md flex items-center justify-center">
            <div className="text-white text-[10px] font-bold font-['Montserrat']">With Clubs</div>
          </div>
          <div className="text-[#252525] text-[14px] font-black font-['Montserrat']">12</div>
          <div className="text-[#252525] text-[14px] font-black font-['Montserrat']">12</div>
        </div>
      </div>
      <img className="w-[220px] h-[300px] left-[25px] top-[15px] absolute rounded-lg" src="https://via.placeholder.com/220x300" alt="Agent" />
      <div className="h-[35px] left-[190px] top-[40px] absolute">
        <div className="left-[5px] top-[25px] absolute text-center text-[#09296e] text-[8px] font-black font-['Montserrat']">EGYPT</div>
      </div>
      <div className="w-[150px] left-[10px] top-[310px] absolute text-white text-[6px] font-medium font-['Montserrat'] leading-[8px]">
        Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
      </div>
      <div className="h-[25px] left-[190px] top-[310px] absolute flex flex-col justify-start items-start gap-[4px]">
        <div className="text-white text-[7px] font-normal font-['Montserrat']">License ID:</div>
        <div className="text-white text-[8px] font-bold font-['Montserrat']">202405-6395</div>
      </div>
      <div className="left-[10px] top-[270px] absolute flex flex-col justify-center items-start gap-1.5">
        <div className="text-white text-[11px] font-bold font-['Montserrat'] leading-[14px]">Mohammed Salah</div>
        <div className="w-[60px] px-1 pt-1 pb-1 bg-white rounded-md flex items-center overflow-hidden">
          <img className="w-2 h-2" src="https://via.placeholder.com/8x8" alt="Verified" />
          <div className="text-center text-black text-[4px] font-bold font-['Montserrat']">Minutes 90 verified</div>
        </div>
      </div>
      <div className="left-[15px] top-[10px] absolute text-white text-[9px] font-bold font-['Montserrat'] uppercase">minutes 90</div>
      <div className="w-[80px] h-[30px] p-2 left-[170px] top-0 absolute bg-gradient-to-l from-[#3579b6] to-[#071a59] rounded-tr-[10px] rounded-bl-[5px] flex items-center justify-center gap-1">
        <div className="w-[20px] flex-col justify-start items-center">
          <img className="self-stretch h-3" src="https://via.placeholder.com/20x10" alt="FIFA" />
          <div className="self-stretch text-center text-white text-[5px] font-bold font-['Montserrat'] uppercase">FIFA</div>
        </div>
        <div className="text-white text-[8px] font-bold font-['Montserrat'] uppercase">Verified</div>
      </div>
    </div>
  )
}

export default AgentCard