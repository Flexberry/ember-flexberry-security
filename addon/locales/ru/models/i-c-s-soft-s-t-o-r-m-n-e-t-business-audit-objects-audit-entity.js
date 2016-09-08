export default {
  projections: {
    AuditEntityE: {
      objectPrimaryKey: {
        caption: 'Идентификатор'
      },
      objectType: {
        caption: 'Тип объекта',
        name: {
          caption: 'Имя'
        }
      },
      operationTime: {
        caption: 'Время операции'
      },
      operationType: {
        caption: 'Тип операции'
      },
      executionResult: {
        caption: 'Результат'
      },
      source: {
        caption: 'Источник'
      },
      user: {
        caption: 'Пользователь',
        name: {
          caption: 'Имя'
        },
        login: {
          caption: 'Логин'
        }
      },
      createTime: {
        caption: 'Создание'
      },
      creator: {
        caption: 'Создатель'
      },
      editTime: {
        caption: 'Редактирование'
      },
      editor: {
        caption: 'Редактор'
      },
      auditFields: {
        caption_: 'Изменения',
        field: {
          caption: 'Поле'
        },
        caption: {
          caption: 'Имя поля'
        },
        oldValue: {
          caption: 'Старое значение'
        },
        newValue: {
          caption: 'Новое значение'
        },
        mainChange: {
          caption: 'Изменение'
        }
      }
    },
    AuditEntityL: {
      objectPrimaryKey: {
        caption: 'Идентификатор'
      },
      objectType: {
        caption: 'Тип объекта',
        name: {
          caption: 'Имя'
        }
      },
      operationTime: {
        caption: 'Время операции'
      },
      operationType: {
        caption: 'Тип операции'
      },
      executionResult: {
        caption: 'Результат'
      },
      user: {
        caption: 'Инициатор',
        name: {
          caption: 'Инициатор'
        }
      },
      source: {
        caption: 'Источник'
      }
    },
    AuditEntityUpdateView: {
      operationTime: {
        caption: 'Время операции'
      },
      executionResult: {
        caption: 'Результат выполнения'
      },
      auditFields: {
        caption: 'Поля аудита',
        field: {
          caption: 'Поле'
        },
        oldValue: {
          caption: 'Старое значение'
        },
        newValue: {
          caption: 'Новое значение'
        }
      }
    },
    ConstructNotStoredAttr: {
      objectPrimaryKey: {
        caption: 'Идентификатор'
      },
      operationTime: {
        caption: 'Время операции'
      },
      operationType: {
        caption: 'Тип операции'
      },
      user: {
        caption: 'Пользователь',
        name: {
          caption: 'Имя'
        }
      },
      executionResult: {
        caption: 'Результат'
      }
    }
  }
};
