import React, { useEffect, useState } from "react";
import gallery from "./gallery.module.scss";
import { Picture } from "../../components/Picture/Picture";
import { SERVER_HOST } from "../../http";
import { IGalleryProps } from "../../types/Interfaces";
import { IGallery } from "../../types/responses/UserResponse";
import UserService from "../../services/UserService";
import { useParams } from "react-router-dom";
import { Loader } from "../../components/Loader/Loader";
export const Gallery: React.FC<IGalleryProps> = () => {
  const [picture, setPictures] = useState<IGallery[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    UserService.getPictures().then((res) => {
      setLoading(false);
      setPictures(res.data);
    });
  }, []);

  return (
    <div className={gallery.wrap_container}>
      {loading ? (
        <div className={gallery.wrapper_loader}>
          <Loader />
        </div>
      ) : (
        <div className={gallery.gallery}>
          {picture?.map((el, index) => {
            return <Picture key={index} url={`${SERVER_HOST}/${el.url}`} />;
          })}
        </div>
      )}
    </div>
  );
};
