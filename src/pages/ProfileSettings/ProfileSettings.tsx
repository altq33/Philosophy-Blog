import React, { useEffect } from "react";
import profileSettings from "./profileSettings.module.scss";
import { useUserProfile } from "../../hooks/useUserProfile";
import {
  Controller,
  ControllerFieldState,
  ControllerRenderProps,
  FieldValues,
  RegisterOptions,
  SubmitHandler,
  UseFormRegisterReturn,
  UseFormStateReturn,
  useForm,
} from "react-hook-form";
import { IFormSettingsFields } from "../../types/Interfaces";
import { ProfileSettingsInput } from "../../components/UI/ProfileSettingsInput";
import Select, { components } from "react-select";
import { selectStyle } from "./selectStyle";
import { InputSlider } from "../../components/UI/InputSlider";
import { InputFile } from "../../components/UI/InputFile";
import { FormAvatarUploader } from "../../components/FormAvatarUploader/FormAvatarUploader";
import baseAvatar from "../../assets/Img/base-profile-avatar.png";
import { SERVER_HOST } from "../../http";
import { GoalsEditor } from "../../components/GoalsEditor/GoalsEditor";

export const ProfileSettings = () => {
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

  const sexOptions = [
    { value: null, label: "Не указано" },
    { value: "M", label: "Мужской" },
    { value: "W", label: "Женский" },
  ];

  const directionOptions = [
    { value: null, label: "Не указано" },
    { value: "Эмпиризм", label: "Эмпиризм" },
    { value: "Рационализм", label: "Рационализм" },
    { value: "Идеализм", label: "Идеализм" },
    { value: "Позитивизм", label: "Позитивизм" },
    { value: "Стоицизм", label: "Стоицизм" },
    { value: "Структурализм", label: "Структурализм" },
    { value: "Феноменология", label: "Феноменология" },
    { value: "Материализм", label: "Материализм" },
    { value: "Экзистенциализм", label: "Экзистенциализм" },
    { value: "Скептицизм", label: "Скептицизм" },
    { value: "Цинизм", label: "Цинизм" },
    { value: "Романтичность", label: "Романтичность" },
    { value: "Догматизм", label: "Догматизм" },
    { value: "Критика", label: "Критика" },
    { value: "Контрактуализм", label: "Контрактуализм" },
    { value: "Утилитаризм", label: "Утилитаризм" },
    { value: "Коммунизм", label: "Коммунизм" },
    { value: "Социализм", label: "Социализм" },
    { value: "Либерализм", label: "Либерализм" },
    { value: "Либертарианство", label: "Либертарианство" },
  ];

  return isLoading ? (
    <div>Загрузка</div> // TODO: Loader
  ) : (
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
            <FormAvatarUploader
              name="avatar"
              register={register}
              avatarUrl={
                user?.avatarUrl
                  ? `${SERVER_HOST}/${user.avatarUrl}`
                  : baseAvatar
              }
            />
            <Controller
              control={control}
              defaultValue={user?.bio.goals}
              render={({ field: { onChange, value } }) => (
                <GoalsEditor onChange={onChange} defaultGoals={value} />
              )}
              name={"goals"}
            />
          </section>

          <input type="submit" />
        </form>
      </div>
    </div>
  );
};
