import React from 'react';
import { useParams } from 'react-router-dom';
import { getAdvertDetail, deleteAdvert } from '../../../api/adverts';
import Spinner from '../../shared/Spinner';
import AdvertDetail from './AdvertDetail';




const AdvertDetailPage = ({ history }) => {
    
    const { id } = useParams();
    const [isLoading,setIsLoading] = React.useState(false);
    const [advertDetail, setAdvertDetail] = React.useState([]);
   
    React.useEffect(()=>{
        const getAdvertById = async ()=>{
            try {
                setIsLoading(true);
                setAdvertDetail(await getAdvertDetail(id));
            } catch (error) {
                history.replace('/404');
            }finally{
                setIsLoading(false);
            }
        }

        getAdvertById();
        
    },[setIsLoading,history,id]);

    
    const onClickDelete = async ()=>{
       
        try {
            await deleteAdvert(id);
            history.push('/');
        } catch (error) {
            history.replace('/404');
        }
       
    }

  
    return (

        <React.Fragment>
            { isLoading && <Spinner/>}
            <AdvertDetail 
                advertDetail {...advertDetail}
                onClickDelete={onClickDelete}
            /> 
        </React.Fragment>
    )
    
   
    
    
}
export default AdvertDetailPage;