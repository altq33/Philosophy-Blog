import React, { useContext, useEffect, useState } from "react";
import crpost from "../CreatePost/crpost.module.scss";
import { ICreatePostFields, IPost } from "../../types/Interfaces";
import { Controller, useForm } from "react-hook-form";
import { Context } from "../../main";
import { Link, useNavigate, useParams } from "react-router-dom";
import PostService from "../../services/PostService";
import { FormCoverUploader } from "../../components/FormCoverUploader/FormCoverUploader";
import { ErrorContainer } from "../../components/ErrorContainer/ErrorContainer";
import { errorContainerProfileStyle } from "../../resources/validations";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { ListEditor } from "../../components/ListEditor/ListEditor";
import { QualitiesListItem } from "../../components/ListEditor/QualitiesListItem";
import { NotFound } from "../NotFound/NotFound";
import { Loader } from "../../components/Loader/Loader";
import { SERVER_HOST } from "../../http";

export const EditPost = () => {
  const {
    register,
    formState: { errors, isValid },
    resetField,
    handleSubmit,
    setValue,
    setError,
    control,
  } = useForm<ICreatePostFields>({ mode: "onChange" });

  const [isLoading, setIsLoading] = useState(true);
  const [post, setPost] = useState<null | IPost>(null);

  const { store } = useContext(Context);
  const params = useParams();
  const navigation = useNavigate();

  useEffect(() => {
    setIsLoading(true);
    PostService.getPostById(params.id!!)
      .then((res) => {
        setPost(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, []);

  const onSumbit = (data: ICreatePostFields) => {
    const formData = new FormData();
    formData.append("cover", data.cover ? data.cover[0] : "");
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("text", data.text);
    formData.append("tags", JSON.stringify(data.tags));
    formData.append("user", store.user.userId);

    PostService.updatePost(post?._id!!, formData).then((res) => {
      navigation(`/${store.user.login}/posts/${post?._id!!}`);
    });
  };

  return !post && !isLoading ? (
    <NotFound />
  ) : (
    <div className={crpost.wrap_container}>
      {isLoading ? (
        <Loader />
      ) : (
        <div className={crpost.form_container}>
          <form
            action=""
            className={crpost.form}
            encType="multipart/form-data"
            onSubmit={handleSubmit(onSumbit)}
          >
            <FormCoverUploader
              defaultValue={post?.imgUrl}
              register={register}
              name="cover"
              setValue={setValue}
              resetFile={resetField}
            />

            <div className={crpost.input_container}>
              <label className={crpost.label}>
                Заголовок
                <input
                  type="text"
                  className={crpost.text_input}
                  {...register("title", {
                    required: "Поле является обязательным!",
                    value: post?.title,
                    maxLength: {
                      value: 26,
                      message: "Максимально 26 символов!",
                    },
                  })}
                  maxLength={26}
                />
                <ErrorContainer
                  styles={errorContainerProfileStyle}
                  errors={errors?.title}
                />
              </label>
              <label className={crpost.label}>
                Описание
                <textarea
                  className={crpost.text_area}
                  {...register("description", {
                    required: "Поле является обязательным!",
                    value: post?.description,
                    maxLength: {
                      value: 240,
                      message: "Максимально 240 символов!",
                    },
                  })}
                  name="description"
                  cols={30}
                  rows={30}
                  maxLength={240}
                />
                <ErrorContainer
                  styles={errorContainerProfileStyle}
                  errors={errors?.description}
                />
              </label>
              <label className={crpost.label}>
                Содержание
                <Controller
                  control={control}
                  defaultValue={post?.text}
                  render={({ field: { onChange, value } }) => {
                    return <SimpleMDE onChange={onChange} value={value} />;
                  }}
                  name={"text"}
                  rules={{
                    required: "Поле является обязательным!",
                  }}
                />
                <ErrorContainer
                  styles={errorContainerProfileStyle}
                  errors={errors?.text}
                />
              </label>
              <label htmlFor="" className={crpost.label}>
                Тэги
                <Controller
                  control={control}
                  defaultValue={post?.tags ?? []}
                  render={({ field: { onChange, value } }) => (
                    <ListEditor
                      onChange={onChange}
                      defaultItems={value}
                      placeholder="Введите тэг"
                      outerContainerStyles={{ width: "50%", minWidth: "280px" }}
                      containerStyles={{
                        flexFlow: "row wrap",
                        justifyContent: "flex-start",
                      }}
                      render={(el, deleteItem) => (
                        <QualitiesListItem
                          value={{
                            id: el.id,
                            value: "#" + el.value.split(" ").join(""),
                          }}
                          onDelete={deleteItem}
                        />
                      )}
                      validationRules={{
                        maxLength: 20,
                        minLength: 1,
                        maxElements: 5,
                      }}
                    />
                  )}
                  name={"tags"}
                />
              </label>
            </div>
            <div className={crpost.submit_container}>
              <input
                type="button"
                disabled={!isValid}
                className={crpost.submit}
                onClick={handleSubmit(onSumbit)}
                value="Опубликовать"
              />
              <Link to={`/${store.user.login}`} className={crpost.delete}>
                Удалить
              </Link>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};
