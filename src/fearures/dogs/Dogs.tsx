import React, { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Phase } from '../../constants';
import { RootState } from '../../redux/rootReducer';
import { dogImages } from './actions';
import * as ApiEndPoints from '../../constants/apiEndPoints'

const Dogs = () => {
    const { images, phase } = useSelector(
        (state: RootState) => state.dogImages
      );        
    const dispatch = useDispatch();
    useEffect(() => {
        if(phase === Phase.INIT)
        dispatch(dogImages(ApiEndPoints.dogImagesURL))
    }, [phase]);
    return (
      <div>
        {images  && <div>
        <img  
              src={images?.message}
              alt="image"
              className="category-card-img"
            />
        </div>    }        
      </div>
    )
}

export default Dogs;