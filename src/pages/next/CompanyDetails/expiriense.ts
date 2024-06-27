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
  projects: {
    title: string;
    link: string;
  }[];
};

export const expirience: Record<string, Expirience> = {
  tsum: {
    company: "Цум",
    position: "Senior Frontend Developer (Сентябрь 2021 — по настоящее время)",
    responsibility: [
      {
        type: "paragraph",
        payload: `В компании я занимался разработкой проектов таких как:`,
      },
      {
        type: "list",
        payload: [
          "Внутренний сервис для сайта цум.",
          "Основной онлайн магазин (tsum.ru).",
          "Ресейл платформа (collect.tsum.ru).",
          "Vr примерка (офлайн терминал в магазине цум).",
        ],
      },
      {
        type: "paragraph",
        payload: "Задачи которые я помогал решать:",
      },
      {
        type: "list",
        payload: [
          "Внедрение и поддержка А/Б тестирования.",
          "Внедрение и поддержка аналитических интеграций (Gtm, mindbox, DY).",
          "Повышение отказоустойчивости основного сайта.",
          "Улучшение технических метрик (FCP, TTI)",
          "Ускорение и обновление сборок (серверный рендеринг и мини приложения)",
        ],
      },
      {
        type: "paragraph",
        payload: `За время работы в компании я сильно подтянул свои технические навыки не только во фронтенд направлении,
        но и разбирался с тем как устроены проекты в целом (бекенд, devops часть).
        Так же очень плотно занимался тестированием (юнит тесты + интеграционные)`,
      },
    ],
    achievements: [],
    techonologies: [
      "HTML, SCSS",
      "JS, ES6",
      "React, Styled Components, Effector/Redux, Typescript",
      "Webpack, Vite",
      "gRpc",
    ],
    projects: [
      {
        title: "Основной онлайн магазин Цум",
        link: "https://tsum.ru/",
      },
      {
        title: "Ресейл платформа",
        link: "https://collect.tsum.ru/",
      },
    ],
  },
  olimp: {
    company: "ООО БК «Олимп»",
    position:
      "Senior Frontend Developer (Июнь 2020 — Сентябрь 2021, 1 год 2 месяца)",
    responsibility: [
      {
        type: "paragraph",
        payload: `В рамках работы в комании я занимался такими проектами как:`,
      },
      {
        type: "list",
        payload: [
          `Основной сайт для ставок на спорт`,
          `Внутренний сервис для партнерских программ`,
          `Парсер коэффициентов`,
          `Прототип легковестной версии приложения (React Native)`,
        ],
      },
      {
        type: "mark",
        payload: "Дополнительно",
      },
      {
        type: "list",
        payload: [
          "Разработка мобильной и десктопной версии сайта",
          "Разработка SDK для фронтовых сервиосов",
          "Покрытие тестами кодовый базы и повышение DX для команды",
        ],
      },
    ],
    achievements: [
      "Разработан гибкий SDK",
      "Разработан UI кит",
      "Интеграция SDK в проекты",
    ],
    techonologies: [
      "HTML, CSS",
      "JS, ES6",
      "React, Styled Components, Effector, Typescript",
      "Webpack",
    ],
    projects: [
      {
        title: "Основной сайт олимп бет",
        link: "https://www.olimp.bet/",
      },
    ],
  },
  dialog: {
    company: "ООО «Диалог»",
    position:
      "Senior Frontend Developer (Май 2019 — Август 2020, 1 год 4 месяца)",
    responsibility: [
      {
        type: "paragraph",
        payload: `В компании я работал над проектом сбер чата, которые позиционировал себя как корпоративный месседжер. Отдельно можно отметить предложенное и реализованное решение для взаимодействия Index Db с состоянием чата`,
      },
      {
        type: "paragraph",
        payload: "Были места в которых я проявлял больше инициативы:",
      },
      {
        type: "list",
        payload: [
          "Разработка модулей для платформы.",
          "Участие в проектировании архитектуры.",
        ],
      },
    ],
    achievements: [
      "Разработан модуль поиска групп и пользователей по всем чатам",
      "Разработана система настроек для груповых чатов",
      "Созданы компоненты для виртуализации больших списков",
    ],
    techonologies: [
      "HTML, CSS",
      "JS, ES6",
      "React, AstroTurf, RxJs, RxDb, Flow, Testing-library",
      "Webpack, Lerna",
    ],
    projects: [
      {
        title: "Dialog месседжер",
        link: "https://developers.sber.ru/portal/products/dialog-plus-enterprise/legal",
      },
    ],
  },
  unitemp: {
    company: "Unitemp",
    position: "Веб разработчик (Февраль 2018 - Май 2019, 1 год 3 месяца)",
    responsibility: [
      {
        type: "list",
        payload: [
          "Написание приложения по поиску работы ios & android (React native)",
          "Разработка архитектуры с нуля для приложения",
          "Разработка нативных анимаций",
          "Деплой приложений в сторы",
        ],
      },
      {
        type: "paragraph",
        payload: `В рамках работы в компании я познакомился с новыми для себя технологиями и подходами. Так же разбирался в устройстве работы IOS и Andoid приложений`,
      },
    ],
    achievements: [
      "Создание организации на гитхаб для react native (https://github.com/rn-libs)",
      "Контрибьютил в open source проекты",
    ],
    techonologies: [
      "HTML, CSS",
      "JS, ES6",
      "React Native",
      "redux, redux-thunk, recompose, нативные библиотеки",
    ],
    projects: [
      {
        title: "Приложение по поиску работы",
        link: "https://vk.com/zarabotal_msk",
      },
    ],
  },
  idea: {
    company: `ООО "Мир Идей"`,
    position: "Web developer (Июль 2017 — Февраль 2018, 8 месяцев)",
    responsibility: [
      {
        type: "paragraph",
        payload: `Это первая компания в которой я начал работать над реальными проектами. За время своей работы я познакомился с процессами работы в команде. Поскольку это была аутсорс компания мне приходилось часто переключать контекст и решать различные задачи на разных проектах.`,
      },
      {
        type: "list",
        payload: [
          "Верстка лендингов",
          "Разработка spa на Vue JS",
          "Поддержка существующих проектов",
        ],
      },
    ],
    achievements: [
      "Разработка платформы для обработки баннеров (бекенд + фронтенд) для ускорения работы коллег из отдела продвижения",
    ],
    techonologies: [
      "HTML, CSS",
      "JS, ES6, PHP",
      "Vue, React, larave",
      "Webpack, redux, redux-thunk",
    ],
    projects: [],
  },
};
