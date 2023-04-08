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
