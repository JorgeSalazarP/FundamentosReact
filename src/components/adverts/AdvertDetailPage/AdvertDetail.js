import React from 'react';
import T from 'prop-types';
import { useHistory } from 'react-router-dom';
import Modal from './Modal';



const AdvertDetail = ({ name,price,photo,sale,tags,onClickDelete }) => {
    
    const [isOpenModal,setIsOpenModal] = React.useState(false);
    const history = useHistory();
    
    const openModal = () =>{
        setIsOpenModal(!isOpenModal);
    }

    return (

            <div 
                className="row mt-5"
                style={{ height:780 }}
            >   
                
                    <div className="col-4">
                        {photo &&
                            <img 
                                src={`${process.env.REACT_APP_API_BASE_URL}${photo}`} alt=""
                                className="img-thumbnail animate__animated animate__fadeInLeft"
                            />
                        }
                    </div>
                        
                <div className="col-6">
                    

                    <div className="card-header d-flex align-items-center justify-content-center">{name}</div>
                        <div className="card-body border rounded">
                            <p className="card-title">{`${price}€`}</p>
                            <p className="card-text"> {sale ? 'Buy': 'Sell'} </p>
                            <p className="card-text"> {tags} </p>
                        </div>
                       
                        <div className="d-flex align-items-center justify-content-center">
                            <button 
                                className="btn btn-primary w-40"
                                onClick={ ()=>(history.goBack()) }
                            >
                                Return
                            </button>
                            <button 
                                className="btn btn-outline-info w-40" 
                                style={ {backgroundColor: 'red', marginLeft: 20, color:'white'} }
                                onClick = {openModal}
                            >
                                Delete
                            </button>
                        </div>
                    {isOpenModal && 
                        <Modal 
                            openModal={openModal}
                            onClickDelete={onClickDelete}
                        >
                            Are you sure to delete this advert?
                        </Modal>
                    }
                    
                    
    
                </div>
    
            </div>
    );
}

AdvertDetail.propTypes = {
    photo: T.string,
    name:T.string,
    price:T.number,
    sale:T.bool,
    tags:T.array,
    onClickDeleteAdvert: T.func,
};
  
AdvertDetail.defaultProps = {
    photo: null,
};


export default AdvertDetail;