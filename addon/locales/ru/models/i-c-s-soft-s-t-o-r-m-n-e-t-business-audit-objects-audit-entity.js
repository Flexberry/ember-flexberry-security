export default {
  projections: {
    AuditEntityE: {
      objectPrimaryKey: {
        __caption__: 'Идентификатор'
      },
      objectType: {
        __caption__: 'Тип объекта',
        name: {
          __caption__: 'Имя'
        }
      },
      operationTime: {
        __caption__: 'Время операции'
      },
      operationType: {
        __caption__: 'Тип операции'
      },
      executionResult: {
        __caption__: 'Результат'
      },
      source: {
        __caption__: 'Источник'
      },
      user: {
        __caption__: 'Пользователь',
        name: {
          __caption__: 'Имя'
        },
        login: {
          __caption__: 'Логин'
        }
      },
      createTime: {
        __caption__: 'Создание'
      },
      creator: {
        __caption__: 'Создатель'
      },
      editTime: {
        __caption__: 'Редактирование'
      },
      editor: {
        __caption__: 'Редактор'
      },
      auditFields: {
        __caption___: 'Изменения',
        field: {
          __caption__: 'Поле'
        },
        __caption__: {
          __caption__: 'Имя поля'
        },
        oldValue: {
          __caption__: 'Старое значение'
        },
        newValue: {
          __caption__: 'Новое значение'
        },
        mainChange: {
          __caption__: 'Изменение'
        }
      }
    },
    AuditEntityL: {
      objectPrimaryKey: {
        __caption__: 'Идентификатор'
      },
      objectType: {
        __caption__: 'Тип объекта',
        name: {
          __caption__: 'Имя'
        }
      },
      operationTime: {
        __caption__: 'Время операции'
      },
      operationType: {
        __caption__: 'Тип операции'
      },
      executionResult: {
        __caption__: 'Результат'
      },
      user: {
        __caption__: 'Инициатор',
        name: {
          __caption__: 'Инициатор'
        }
      },
      source: {
        __caption__: 'Источник'
      }
    },
    AuditEntityUpdateView: {
      operationTime: {
        __caption__: 'Время операции'
      },
      executionResult: {
        __caption__: 'Результат выполнения'
      },
      auditFields: {
        __caption__: 'Поля аудита',
        field: {
          __caption__: 'Поле'
        },
        oldValue: {
          __caption__: 'Старое значение'
        },
        newValue: {
          __caption__: 'Новое значение'
        }
      }
    },
    ConstructNotStoredAttr: {
      objectPrimaryKey: {
        __caption__: 'Идентификатор'
      },
      operationTime: {
        __caption__: 'Время операции'
      },
      operationType: {
        __caption__: 'Тип операции'
      },
      user: {
        __caption__: 'Пользователь',
        name: {
          __caption__: 'Имя'
        }
      },
      executionResult: {
        __caption__: 'Результат'
      }
    }
  }
};
