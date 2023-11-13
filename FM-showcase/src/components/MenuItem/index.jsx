/* eslint-disable react/prop-types */

    const MenuItem = (props) => {

    return (
        <div className='w-60 bg-custom-light-gray h-60 font-semibold text-2xl rounded-lg hover:scale-110 border-solid hover:border-4 border-blue-500 transition ease-in-out duration-300 cursor-pointer flex flex-col' > 
        
            <div className='w-fill h-3/4 grid place-items-center'>
                <img src={props.icon} alt="" className='w-32' />
            </div>

            <h2 className='text-center text-custom-blue'>{props.name}</h2>
        
        </div>
    )
    }

export default MenuItem