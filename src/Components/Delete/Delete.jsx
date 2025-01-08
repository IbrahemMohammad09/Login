import { IoMdPerson } from "react-icons/io";
import  { useState } from 'react';
import { FaCheckDouble , FaLock} from "react-icons/fa";
const Confirm = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-14 rounded shadow-md ">
        <h2 className="text-lg font-bold mb-4 text-blue-500">Are you Sure to delete  ? </h2>
        <div className="flex justify-center">
          <button className="bg-blue-500 text-white px-4 py-2 rounded mr-3" onClick={onConfirm} >Yes</button>
          <button className="bg-red-500 text-white px-4 py-2 rounded" onClick={onClose}>No</button>
        </div>
      </div>
    </div>
  );
};
const SuccessMessage = ({ isVisible }) => {
    if (!isVisible) return null;
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded shadow-md">
            <h2 className="text-lg font-bold mb-4"> <FaCheckDouble className="text-blue-500" /> Deleted Successfully !</h2>
          </div>
        </div>
      );
    };
    
export default function Delete(){
    const [isDivOpen, setIsDivOpen] = useState(false);
   
    const [isSuccessVisible, setIsSuccessVisible] = useState(false);

    const handleSubmit = (e) => {
      setIsDivOpen(true);
      e.preventDefault();
    };
  
    const handleClose = () => {
      setIsDivOpen(false);
    };
  
    const handleConfirm = () => {
      setIsDivOpen(false);
      setIsSuccessVisible(true);
      setTimeout(() => {
        setIsSuccessVisible(false);
      }, 2000);
    };
    
return<>
 <div className="flex justify-center mt-12 ">
        <div className="border border-blue shadow-lg  p-11">
          <form onSubmit={handleSubmit} >
            <div className="mb-4 relative">
  <IoMdPerson className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-500" /> 
  <input type="text" className="mt-1 block pl-10 p-3 h-16 border-0 border-b-2 border-blue-500 focus:outline-none focus:border-b-2 focus:border-blue-600" 
  placeholder="UserName"
  />
</div>
   <div className="mb-4 relative">
  <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blue-500" /> 
  <input type="password" className="mt-1 block pl-10 p-3 h-16 border-0 border-b-2 border-blue-500 focus:outline-none focus:border-b-2 focus:border-blue-600" 
    placeholder="Password" 
  />
</div>
           <button type="submit" className= "bg-blue-500 text-white w-full py-4 px-6  mt-7 font-normal   hover:bg-gray-500">
              Delete account
            </button>
          </form>
        
         
        </div>
      </div>

      
      <Confirm isOpen={isDivOpen} onClose={handleClose}  onConfirm={handleConfirm}/> <SuccessMessage isVisible={isSuccessVisible} />
</>
}