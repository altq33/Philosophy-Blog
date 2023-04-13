import React, { useContext, useRef } from "react";
import crpost from "./crpost.module.scss";
import { Controller, useForm } from "react-hook-form";
import { ICreatePostFields } from "../../types/Interfaces";
import { FormAvatarUploader } from "../../components/FormAvatarUploader/FormAvatarUploader";
import { CoverInput } from "../../components/CoverInput/CoverInput";
import { FormCoverUploader } from "../../components/FormCoverUploader/FormCoverUploader";
import { ListEditor } from "../../components/ListEditor/ListEditor";
import { GoalsListItem } from "../../components/ListEditor/GoalsListItem";
import { QualitiesListItem } from "../../components/ListEditor/QualitiesListItem";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import PostService from "../../services/PostService";
import { Context } from "../../main";
import { Link, useNavigate } from "react-router-dom";
import { ErrorContainer } from "../../components/ErrorContainer/ErrorContainer";
import { errorContainerProfileStyle } from "../../resources/validations";

export const CreatePost = () => {
  const {
    register,
    formState: { errors, isValid },
    resetField,
    handleSubmit,
    setError,
    control,
  } = useForm<ICreatePostFields>({ mode: "onChange" });

  const { store } = useContext(Context);
  const navigation = useNavigate();
  const onSumbit = (data: ICreatePostFields) => {
    const formData = new FormData();
    formData.append("cover", data.cover ? data.cover[0] : "");
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("text", data.text);
    formData.append("tags", JSON.stringify(data.tags));
    formData.append("user", store.user.userId);

    PostService.createPost(formData).then((res) => {
      navigation(`/${store.user.login}/posts/${res.data.post._id}`);
    });
  };

  return (
    <div className={crpost.wrap_container}>
      <div className={crpost.form_container}>
        <form
          action=""
          className={crpost.form}
          encType="multipart/form-data"
          onSubmit={handleSubmit(onSumbit)}
        >
          <FormCoverUploader
            register={register}
            name="cover"
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
                render={({ field: { onChange, value } }) => (
                  <SimpleMDE onChange={onChange} />
                )}
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
            <label className={crpost.label}>
              Тэги
              <Controller
                control={control}
                render={({ field: { onChange } }) => (
                  <ListEditor
                    onChange={onChange}
                    defaultItems={[]}
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
    </div>
  );
};
