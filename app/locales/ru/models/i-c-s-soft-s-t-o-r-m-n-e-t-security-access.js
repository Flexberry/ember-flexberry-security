export default {
  projections: {
    AuditView: {
      typeAccess: {
        caption: 'Тип доступа'
      },
      filter: {
        caption: 'Фильтр',
        name: {
          caption: 'Имя фильтра'
        },
        filterText: {
          caption: 'Заголовок фильтра'
        }
      },
      permition: {
        caption: 'Разрешение',
        agent: {
          caption: '',
          name: {
            caption: 'Имя агента'
          },
          login: {
            caption: 'Логи агента'
          }
        },
        subject: {
          caption: '',
          name: {
            caption: 'Имя субъекта'
          }
        }
      }
    },
    CheckAccessClass: {
      typeAccess: {
        caption: ''
      },
      permition: {
        caption: '',
        subject: {
          caption: '',
          name: {
            caption: ''
          }
        },
        agent: {
          caption: ''
        }
      },
      filter: {
        caption: '',
        filterText: {
          caption: ''
        }
      }
    },
    CheckAccessOnObject: {
      filter: {
        caption: '',
        filterText: {
          caption: ''
        },
        name: {
          caption: ''
        }
      },
      typeAccess: {
        caption: ''
      }
    },
    Sec_AccessD: {
      typeAccess: {
        caption: 'Тип доступа'
      }
    },
    Sec_AccessE: {
      permition: {
        caption: '~',
        agent: {
          caption: '',
          name: {
            caption: 'Агент'
          }
        },
        subject: {
          caption: '',
          name: {
            caption: 'Субъект'
          },
          isClass: {
            caption: ''
          },
          isOperation: {
            caption: ''
          }
        }
      },
      typeAccess: {
        caption: 'Тип доступа'
      },
      filter: {
        caption: '~',
        name: {
          caption: 'Имя фильтра'
        }
      }
    },
    Sec_AccessL: {
      permition: {
        caption: '',
        agent: {
          caption: '',
          name: {
            caption: 'Агент'
          }
        },
        subject: {
          caption: '',
          name: {
            caption: 'Субъект'
          }
        }
      },
      typeAccess: {
        caption: 'Тип доступа'
      },
      filter: {
        caption: 'Фильтр',
        name: {
          caption: 'Фильтр'
        }
      },
      createTime: {
        caption: 'Дата создания'
      },
      creator: {
        caption: 'Создатель'
      },
      editTime: {
        caption: 'Дата изменения'
      },
      editor: {
        caption: 'Редактор'
      }
    }
  }
};
