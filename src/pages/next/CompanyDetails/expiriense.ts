type ResponsibilityTyped =
  | {
      type: "paragraph";
      payload: string;
    }
  | {
      type: "mark";
      payload: string;
    }
  | {
      type: "list";
      payload: string[];
    };

export type Expirience = {
  company: string;
  position: string;
  responsibility: ResponsibilityTyped[];
  achievements: string[];
  techonologies: string[];
};

export const expirience: Record<string, Expirience> = {
  tsum: {
    company: "Цум",
    position:
      "Senior Frontend Developer / Team lead (Сентябрь 2021 - по настоящее время)",
    responsibility: [
      {
        type: "paragraph",
        payload: `Участие в проектах tsum / tsum collect
          Разработка с нуля обоих проектов. Так же разработка внутренних сервисов.`,
      },
      {
        type: "mark",
        payload: `Как Team Lead:`,
      },
      {
        type: "list",
        payload: [
          "Управление командой из пяти человек (tsum) и двоих в (tsum collect).",
          "Дизайн команды.",
          "Перфоманс ревью.",
          "Помощь в усилении компетенций членов команды.",
          "Оценка и декомпозиция задач.",
          "Постановка и делегирование задач.",
        ],
      },
      {
        type: "mark",
        payload: `Как Tech Lead:`,
      },
      {
        type: "list",
        payload: [
          "Курирование процесса разработки основного продукта и внутренних.",
          "Написание не тривиальных фич.",
          "Составление задач по тех долгу и обновления кодовой базы.",
          "Внедрение новых практик и контроль текущих задач.",
          "Обеспечение отказоустойчивости и повышение метрик таких как FCP, FID и других.",
        ],
      },
    ],
    achievements: [],
    techonologies: [
      "HTML, CSS",
      "JS, ES6",
      "React, Styled Components, Effector/Redux, Typescript",
      "Webpack",
      "gRpc",
    ],
  },
  olimp: {
    company: "ООО БК «Олимп»",
    position:
      "Senior Frontend Developer (Июнь 2020 - Сентябрь 2021, 1 год 2 месяца)",
    responsibility: [
      {
        type: "list",
        payload: [
          `Разработка мобильной и десктопной версии сайта (2 полноценных проекта)`,
          `Разработка SDK для написания таких же букмекерских контор \n
(Можно подключать логику и кастомизировать, не важно что отвечает за рендер)`,
          `Внедрил ревью кода и фиче бранчи`,
          `Внедрил тестирование (статическое)`,
        ],
      },
    ],
    achievements: [
      "Разработан гибкий SDK",
      "Разработана система компонентов",
      "Переписал старый код с использованием SDK",
      "Успешно внедрены новые архитектурные решения",
    ],
    techonologies: [
      "HTML, CSS",
      "JS, ES6",
      "React, Styled Components, Effector, Typescript",
      "Webpack",
    ],
  },
  dialog: {
    company: "ООО «Диалог»",
    position:
      "Senior Frontend Developer (Май 2019 - Август 2020, 1 год 4 месяца)",
    responsibility: [
      {
        type: "list",
        payload: [
          `Покрытие тестами ui кита`,
          `Покрытие тестами платформу (dialog-web-platform)`,
          `Разработка модулей для платформы`,
          `Участие в разработке архитектуры`,
        ],
      },
    ],
    achievements: [
      "Разработан модуль поиска групп и пользователей (локально плюс глобально)",
      "Разработана система настроек",
      "Созданы компоненты для виртуализации и мульти селекта",
      "Создана полно-экранная галлерея",
      "Внедрены решения по архитектуре которые ускоряют работу сервиса и упрощают взаимодействия ui с браузерной БД",
    ],
    techonologies: [
      "HTML, CSS",
      "JS, ES6",
      "React, AstroTurf, RxJs, RxDb, Flow, Testing-library",
      "Webpack, Lerna",
    ],
  },
  unitemp: {
    company: "Unitemp",
    position: "Старший разработчик (Февраль 2018 - Май 2019, 1 год 3 месяца)",
    responsibility: [
      {
        type: "list",
        payload: [
          `Написание приложения по поиску работы ios & android (React native)`,
          `Разработка архитектуры с нуля для приложения`,
          `Поиск багов и форк сторонних библиотек`,
          `Написание собственных библиотек в open source`,
        ],
      },
    ],
    achievements: [],
    techonologies: [
      "HTML, CSS",
      "JS, ES6",
      "React Native",
      "redux, redux-thunk, recompose, нативные библиотеки",
    ],
  },
  idea: {
    company: `ООО "Мир Идей"`,
    position: "Web developer (Июль 2017 - Февраль 2018, 8 месяцев)",
    responsibility: [
      {
        type: "list",
        payload: [
          `Верстка лендингов`,
          `Разработка spa на vue js`,
          `Поддержка существующих проектов`,
          `Разработка платформы для обработки баннеров (react + свой бекенд на NodeJs)`,
        ],
      },
    ],
    achievements: [],
    techonologies: [
      "HTML, CSS",
      "JS, ES6, PHP",
      "Vue, React, larave",
      "Webpack, redux, redux-thunk",
    ],
  },
};
