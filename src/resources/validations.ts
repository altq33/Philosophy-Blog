export const errorContainerProfileStyle = {
  display: "none",
};

export const loginValidationObject = {
  required: "Поле обязательно к заполнению",
  minLength: {
    value: 3,
    message: "Логин должен иметь минимум 3 символа",
  },
  pattern: {
    value: /^[A-Za-z0-9_]+$/,
    message:
      "В логине можно использовать только латинские буквы, цифры и нижнее подчеркивание",
  },
};

export const ageValidationObject = {
  valueAsNumber: true,
  min: {
    value: 0,
    message: "Возраст не может быть отрицательным",
  },
  max: {
    value: 150,
    message: "Такой возраст непостижим как мудрость",
  },
};

export const locationValidationObject = {
  maxLength: {
    value: 50,
    message: "Ваше местопребывание выходит за пределы материального мира",
  },
};

export const bioValidationObject = {
  maxLength: {
    value: 250,
    message: "Вашу жизнь не уместить в столь краткий рассказ",
  },
};

export const quoteValidationObject = {
  maxLength: {
    value: 100,
    message: "Ваша цитата слишком обширна",
  },
};

export const emailValidationObject = {
  required: "Поле обязательно к заполнению",
  pattern: {
    value:
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    message: "Неправильный формат email",
  },
};

export const passwordValidationObject = {
  required: "Поле обязательно к заполнению",
  minLength: {
    value: 10,
    message: "Пароль должен иметь минимум 10 символов",
  },
  pattern: {
    value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).*$/,
    message:
      "Пароль должен содержать строчные и прописные латинские буквы и цифры",
  },
};
