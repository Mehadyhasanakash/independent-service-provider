import { useNavigate } from 'react-router-dom';
import usePhotographry from '../../../useHook/useHook';
import DisplayService from './DisplayService';

const Service = () => {

    const [photos] = usePhotographry()
    const nivigate = useNavigate()
    

    const ShowCheckOUt = () =>{
        const path ='/checkout'
        nivigate(path)
    }
   
    return (
        <div className='container'>
            <h1 className='text-center text-primary mt-5'>My Service</h1>
            <div className='row'>
                <div className='row row-cols-1 row-cols-md-3 g-4 mx-auto'>
                    {
                        photos.map(photo => <DisplayService
                        
                        key={photo.id}
                        photo ={photo}
                        ShowCheckOUt={ShowCheckOUt}
                        
                        ></DisplayService>)
                    }
                </div>

            </div>
        </div>
    );
};

export default Service;