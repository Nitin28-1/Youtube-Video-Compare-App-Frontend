import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Skeleton } from '@/components/ui/skeleton';
import React, { useState } from 'react'
import { apiconnector } from '../Service/apiConnector.js'
import { toast } from 'react-toastify';
import { validateYoutubeURL } from '@/Service/isValidUrl.js';

const VideoBar = () => {
   
  const [firstURL,setFirstURL]=useState('');
  const [secondURL,setSecondURL]=useState('');
  const [loading,setLoading]=useState(false);
  const [thumbnail1,setThumbnail1]=useState('');
  const [thumbnail2,setThumbnail2]=useState('');
  const [scoreA,setScoreA]=useState(0);
  const [scoreB,setScoreB]=useState(0);
  const [initialData,setInitialData]=useState(false);


  const HandleCompare=async()=>
  {
    console.log('Clicked on handle compare......');
        try {
        
          if(!firstURL || !secondURL )
          {
            return toast.error('Fill all Details.......')
          }
           
          if(firstURL == secondURL)
            {return toast.error('Both link Should Not be same....')};

          console.log("yehi pr aaya mai", `${import.meta.env.VITE_LOCAL_URL}`)
       
          let urlID1=validateYoutubeURL(firstURL);
          let urlID2=validateYoutubeURL(secondURL)
         
          console.log(urlID1);
          console.log(urlID2);
         if(!urlID1 || !urlID2)
         {
            return toast.error("Please Enter valid Youtube URL in both fields")
         }
           
          setInitialData(true);
          setThumbnail1(`https://img.youtube.com/vi/${urlID1}/hqdefault.jpg`);
          setThumbnail2(`https://img.youtube.com/vi/${urlID2}/hqdefault.jpg`);
          setLoading(false);

          const response=await apiconnector("POST",`${import.meta.env.VITE_LOCAL_URL}/api/v1/videoCompare`,{urlID1,urlID2},{
            withCredential:true
          },
        )
        console.log(response);
        setLoading(true);

        if(response.data.success)
        {
          setScoreA(response.data.getScore.videoA_score)
          setScoreB(response.data.getScore.videoB_score)
        }
        else{
          toast.error('Failed to fetch data try agains')
        }

        } catch (error) {
          console.log(error)
        }
  }

  return (
    <div>
         <div className=' text-4xl poppins-semibold  items-center flex justify-center  ' >
            <div className=' flex flex-col justify-center items-center gap-3 mt-10' >
            <h1 className='text-[15px] sm:text-[25px] lg:text-[40px]'>🚀 Let's Compare <span className='text-yellow-500'>Two Same Type Topic</span> Video And </h1>
            <h1 className='text-[13px] sm:text-[25px] lg:text-[35px]'>Find Which One Better For You According Score.. </h1>
            </div>
          
          </div>

       <div className='flex w-full flex-col justify-center items-center mt-10'>
        <h1 className='poppins-black text-3xl'>Paste Video Link Here</h1>
                        
        <div className='flex flex-col gap-5 justify-center items-center '>

         
          <div className='flex flex-wrap md:flex-row flex-col gap-10 mt-7 justify-around'>
          <Input  value={firstURL} onChange={(e)=>{setFirstURL(e.target.value)}} required placeholder="Enter First Video Link Here " className={` w-[400px]`}></Input>
          <Input value={secondURL} onChange={(e)=>{setSecondURL(e.target.value)}} required placeholder="Enter Second Video Link Here " className={` w-[400px]`}></Input>
          
          </div>

          <Button className={`bg-blue-600  w-[30%]`}  onClick={HandleCompare}>
                Compare
            </Button>
        </div>

          </div>

          {
            initialData ? (
              <div className='flex flex-col  items-center mt-10'>
                 
                 {loading ? (<div className='flex flex-col sm:flex-row gap-[100px] lg:gap-[300px] '>
                  
                  <div className={`flex flex-col items-center gap-2 ${scoreA > scoreB  ? 'text-green-700': 'text-red-600'} `}>
                  <h1 className='text-2xl font-semibold text-black'>Video First</h1>
                     <img className='w-60 ' src={`${thumbnail1}`} alt="" />
                        <h1 className='text-4xl font-semibold'>Score</h1>
                         <h1 className='text-5xl font-semibold'>{scoreA}/7</h1>
                      </div>

                      
                      <div className={`flex flex-col items-center gap-2 ${scoreB > scoreA  ? 'text-green-700': 'text-red-600'}`}>
                      <h1 className='text-2xl font-semibold text-black'>Video Second</h1>  
                      <img className='w-60 ' src={`${thumbnail2}`} alt="" />
                        <h1 className='text-4xl font-semibold'>Score</h1>
                         <h1 className='text-5xl font-semibold'>{scoreB}/7</h1>
                      </div>
                
                  
                 </div>):( <div className='flex flex-col sm:flex-row gap-[100px]'>
                    <Skeleton className="h-[125px] w-[250px] rounded-xl" />
                    <div className='text-2xl mt-15 font-semibold'>Calculating Score.......</div>
                    <Skeleton className="h-[125px] w-[250px] rounded-xl" />
                  </div>)}
                 
    
                 <div className='flex w-full gap-[550px] mt-10 items-center justify-center'> 
                   
    
                 </div>
    
              </div>) : 
              (
                <div className='flex justify-center mt-10'>

                 <h1 className='text-[15px] sm:text-2xl font-semibold'>To See Score of Videos  Please Enter Videos Link Here ☝️
                  </h1>  

                </div>
              )
          }


    </div>
  )
}

export default VideoBar