export default {
  projections: {
    AuditEntityE: {
      objectPrimaryKey: {
        caption: 'Идентификатор'
      },
      objectType: {
        caption: '',
        name: {
          caption: 'Тип объекта'
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
        caption: 'Имя',
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
          caption: ''
        }
      }
    },
    AuditEntityL: {
      objectPrimaryKey: {
        caption: 'Идентификатор'
      },
      objectType: {
        caption: '',
        name: {
          caption: 'Тип объекта'
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
        caption: ''
      },
      executionResult: {
        caption: ''
      },
      auditFields: {
        caption: '',
        field: {
          caption: ''
        },
        oldValue: {
          caption: ''
        },
        newValue: {
          caption: ''
        }
      }
    },
    ConstructNotStoredAttr: {
      objectPrimaryKey: {
        caption: ''
      },
      operationTime: {
        caption: ''
      },
      operationType: {
        caption: ''
      },
      user: {
        caption: '',
        name: {
          caption: ''
        }
      },
      executionResult: {
        caption: ''
      }
    }
  }
};
