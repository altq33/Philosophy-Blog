import profileSettings from "./profileSettings.module.scss";
import { useUserProfile } from "../../hooks/useUserProfile";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { IFormSettingsFields } from "../../types/Interfaces";
import { ProfileSettingsInput } from "../../components/UI/ProfileSettingsInput";
import { components } from "react-select";

import { InputSlider } from "../../components/UI/InputSlider";
import { FormAvatarUploader } from "../../components/FormAvatarUploader/FormAvatarUploader";
import baseAvatar from "../../assets/Img/base-profile-avatar.png";
import { SERVER_HOST } from "../../http";
import { ListEditor } from "../../components/ListEditor/ListEditor";
import { GoalsListItem } from "../../components/ListEditor/GoalsListItem";
import { QualitiesListItem } from "../../components/ListEditor/QualitiesListItem";
import { Context } from "../../main";
import { Link, useNavigate } from "react-router-dom";
import { MouseEvent, useContext } from "react";
import { directionOptions, sexOptions } from "../../resources/options";
import { selectStyle } from "../../resources/styles";

export const ProfileSettings = () => {
  const { store } = useContext(Context);
  const navigate = useNavigate();
  const { user, isLoading } = useUserProfile();
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    control,
  } = useForm<IFormSettingsFields>({ mode: "onChange" });

  const onSubmit: SubmitHandler<IFormSettingsFields> = (
    data: IFormSettingsFields
  ) => console.log(data);

  return (
    <div className={profileSettings.wrap_container}>
      <div className={profileSettings.settings_container}>
        <form
          action=""
          encType="multipart/form-data"
          className={profileSettings.form}
          onSubmit={handleSubmit(onSubmit)}
        >
          <section className={profileSettings.group}>
            {" "}
            <ProfileSettingsInput
              label="Логин"
              initValue={user?.login!!}
              type="text"
              name="login"
              register={register}
              validationSchema={{ required: true }}
            />
            <ProfileSettingsInput
              label="Возраст"
              initValue={user?.bio.age!!}
              type="number"
              name="age"
              register={register}
              validationSchema={{ required: true, valueAsNumber: true }}
            />
            <ProfileSettingsInput
              label="Локация"
              initValue={user?.bio.location!!}
              type="text"
              name="location"
              register={register}
              validationSchema={{ required: true }}
            />
            <ProfileSettingsInput
              label="Биография"
              initValue={user?.bio.bio!!}
              name="bio"
              rows={10}
              cols={10}
              maxLength={250}
              register={register}
              validationSchema={{ required: true }}
              textarea
            />
            <ProfileSettingsInput
              label="Цитата"
              initValue={user?.bio.quote!!}
              name="quote"
              rows={5}
              cols={10}
              maxLength={100}
              register={register}
              validationSchema={{ required: true }}
              textarea
            />
          </section>
          <section className={profileSettings.group}>
            <ProfileSettingsInput
              register={register}
              select
              label="Направление"
              control={control}
              defaultValue={user?.bio.philosophyDireсtion ?? null}
              name="direction"
              isSearchable
              components={{
                Menu: (props) => (
                  <components.Menu
                    {...props}
                    className={profileSettings.menu}
                  />
                ),
              }}
              styles={selectStyle}
              options={directionOptions}
            />
            <ProfileSettingsInput
              register={register}
              select
              label="Пол"
              control={control}
              defaultValue={user?.bio.sex ?? null}
              name="sex"
              isSearchable={false}
              components={{
                Menu: (props) => (
                  <components.Menu
                    {...props}
                    className={profileSettings.menu}
                  />
                ),
              }}
              styles={selectStyle}
              options={sexOptions}
            />
            <label className={profileSettings.label} htmlFor="">
              Координаты
              <div className={profileSettings.slider_container}>
                <InputSlider
                  max={10}
                  min={0}
                  leftLabel={"Релативизм"}
                  rightLabel={"Абсолютизм"}
                  value={user?.bio.personality[0] ?? 5}
                  name={"relativismOrAbsolutism"}
                  register={register}
                />
                <InputSlider
                  max={10}
                  min={0}
                  leftLabel={"Идеализм"}
                  rightLabel={"Материализм"}
                  value={user?.bio.personality[1] ?? 5}
                  name={"idealismOrMaterialism"}
                  register={register}
                />
                <InputSlider
                  max={10}
                  min={0}
                  leftLabel={"Эскапизм"}
                  rightLabel={"Реализм"}
                  value={user?.bio.personality[2] ?? 5}
                  name={"escapismOrRealism"}
                  register={register}
                />
                <InputSlider
                  max={10}
                  min={0}
                  leftLabel={"Диалектика"}
                  rightLabel={"Метафизика"}
                  value={user?.bio.personality[3] ?? 5}
                  name={"dialecticsOrMetaphysics"}
                  register={register}
                />
              </div>
            </label>
          </section>
          <section className={profileSettings.group}>
            <label htmlFor="" className={profileSettings.label}>
              Цели
              <Controller
                control={control}
                defaultValue={user?.bio.goals}
                render={({ field: { onChange, value } }) => (
                  <ListEditor
                    onChange={onChange}
                    defaultItems={value}
                    placeholder="Введите цель"
                    render={(el, deleteItem) => (
                      <GoalsListItem value={el} onDelete={deleteItem} />
                    )}
                    validationRules={{
                      maxLength: 50,
                      minLength: 10,
                      maxElements: 3,
                    }}
                  />
                )}
                name={"goals"}
              />
            </label>
            <label htmlFor="" className={profileSettings.label}>
              Качества
              <Controller
                control={control}
                defaultValue={user?.bio.qualities}
                render={({ field: { onChange, value } }) => (
                  <ListEditor
                    onChange={onChange}
                    defaultItems={value}
                    placeholder="Введите качество"
                    render={(el, deleteItem) => (
                      <QualitiesListItem value={el} onDelete={deleteItem} />
                    )}
                    containerStyles={{
                      flexFlow: "row wrap",
                      justifyContent: "flex-start",
                    }}
                    validationRules={{
                      maxLength: 15,
                      minLength: 1,
                      maxElements: 10,
                    }}
                  />
                )}
                name={"qualities"}
              />
            </label>
          </section>
          <section className={profileSettings.group}>
            <label htmlFor="" className={profileSettings.label}>
              Аватар
              <FormAvatarUploader
                name="avatar"
                register={register}
                avatarUrl={
                  user?.avatarUrl
                    ? `${SERVER_HOST}/${user.avatarUrl}`
                    : baseAvatar
                }
              />
            </label>
          </section>

          <div className={profileSettings.buttons_container}>
            <input
              type="button"
              disabled={!isValid}
              value="Изменить"
              onClick={handleSubmit(onSubmit)}
              className={profileSettings.submit}
            />
            <a
              className={profileSettings.back}
              onClick={(e: MouseEvent<HTMLAnchorElement>) => {
                e.preventDefault();
                navigate(-1);
              }}
            >
              Назад
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};
