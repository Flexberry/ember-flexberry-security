export default {
  projections: {
    AuditView: {
      typeAccess: {
        __caption__: 'Тип доступа'
      },
      filter: {
        __caption__: 'Фильтр',
        name: {
          __caption__: 'Имя фильтра'
        },
        filterText: {
          __caption__: 'Заголовок фильтра'
        }
      },
      permition: {
        __caption__: 'Разрешение',
        agent: {
          __caption__: 'Агент',
          name: {
            __caption__: 'Имя агента'
          },
          login: {
            __caption__: 'Логи агента'
          }
        },
        subject: {
          __caption__: 'Субъект',
          name: {
            __caption__: 'Имя субъекта'
          }
        }
      }
    },
    CheckAccessClass: {
      typeAccess: {
        __caption__: 'Тип доступа'
      },
      permition: {
        __caption__: 'Разрешение',
        subject: {
          __caption__: 'Субъект',
          name: {
            __caption__: 'Имя субъекта'
          }
        },
        agent: {
          __caption__: 'Агент'
        }
      },
      filter: {
        __caption__: 'Фильтр',
        filterText: {
          __caption__: 'Заголовок фильтра'
        }
      }
    },
    CheckAccessOnObject: {
      filter: {
        __caption__: 'Фильтр',
        filterText: {
          __caption__: 'Заголовок фильтра'
        },
        name: {
          __caption__: 'Название'
        }
      },
      typeAccess: {
        __caption__: 'Тип  доступа'
      }
    },
    Sec_AccessD: {
      typeAccess: {
        __caption__: 'Тип доступа'
      }
    },
    Sec_AccessE: {
      permition: {
        __caption__: '~',
        agent: {
          __caption__: 'Агент',
          name: {
            __caption__: 'Имя агента'
          }
        },
        subject: {
          __caption__: 'Субъект',
          name: {
            __caption__: 'Имя субъекта'
          },
          isClass: {
            __caption__: 'Класс'
          },
          isOperation: {
            __caption__: 'Операция'
          }
        }
      },
      typeAccess: {
        __caption__: 'Тип доступа'
      },
      filter: {
        __caption__: 'Фильтр',
        name: {
          __caption__: 'Имя фильтра'
        }
      }
    },
    Sec_AccessL: {
      permition: {
        __caption__: 'Разрешение',
        agent: {
          __caption__: 'Агент',
          name: {
            __caption__: 'Имя агента'
          }
        },
        subject: {
          __caption__: 'Субъект',
          name: {
            __caption__: 'Имя субъекта'
          }
        }
      },
      typeAccess: {
        __caption__: 'Тип доступа'
      },
      filter: {
        __caption__: 'Фильтр',
        name: {
          __caption__: 'Фильтр'
        }
      },
      createTime: {
        __caption__: 'Дата создания'
      },
      creator: {
        __caption__: 'Создатель'
      },
      editTime: {
        __caption__: 'Дата изменения'
      },
      editor: {
        __caption__: 'Редактор'
      }
    }
  }
};
