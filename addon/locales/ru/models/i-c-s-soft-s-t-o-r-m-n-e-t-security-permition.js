export default {
  projections: {
    AuditView: {
      agent: {
        __caption__: 'Агент',
        name: {
          __caption__: 'Имя агента'
        },
        login: {
          __caption__: 'Логин агента'
        }
      },
      subject: {
        __caption__: 'Субъект',
        name: {
          __caption__: 'Имя субъекта'
        }
      },
      access: {
        __caption__: 'Доступ',
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
              __caption__: 'Логин'
            }
          },
          subject: {
            __caption__: 'Субъект',
            name: {
              __caption__: 'Имя субъекта'
            }
          }
        }
      }
    },
    CheckAccessOnObject: {
      subject: {
        __caption__: 'Субъект',
        isAttribute: {
          __caption__: 'Атрибут'
        },
        isOperation: {
          __caption__: 'Операция'
        },
        isView: {
          __caption__: 'Представление'
        },
        isClass: {
          __caption__: 'Класс'
        },
        name: {
          __caption__: 'Имя субъекта'
        }
      },
      agent: {
        __caption__: 'Агент',
        name: {
          __caption__: 'Имя агента'
        },
        login: {
          __caption__: 'Логин'
        },
        isUser: {
          __caption__: 'Пользователь'
        },
        isGroup: {
          __caption__: 'Группа'
        },
        isRole: {
          __caption__: 'Роль'
        }
      },
      access: {
        __caption__: 'Доступ',
        filter: {
          __caption__: 'Фильтр',
          filterText: {
            __caption__: 'Заголовок фильтра'
          },
          name: {
            __caption__: 'Наименование'
          }
        },
        typeAccess: {
          __caption__: 'Тип доступа'
        }
      }
    },
    CheckAccessOperation: {
      subject: {
        __caption__: 'Субъект',
        name: {
          __caption__: 'Имя субъекта'
        },
        isOperation: {
          __caption__: 'Операция'
        }
      },
      agent: {
        __caption__: 'Агент'
      }
    },
    Sec_CheckClasses: {
      subject: {
        __caption__: 'Субъект',
        name: {
          __caption__: 'Имя субъекта'
        },
        isOperation: {
          __caption__: 'Операция'
        },
        isClass: {
          __caption__: 'Класс'
        }
      },
      agent: {
        __caption__: 'Агент',
        name: {
          __caption__: 'Имя агента'
        },
        login: {
          __caption__: 'Логин'
        },
        isUser: {
          __caption__: 'Пользователь'
        },
        isRole: {
          __caption__: 'Роль'
        }
      }
    },
    Sec_CheckClassesAndGetDetails: {
      subject: {
        __caption__: 'Субъект',
        name: {
          __caption__: 'Имя субъекта'
        },
        isOperation: {
          __caption__: 'Операция'
        },
        isClass: {
          __caption__: 'Класс'
        }
      },
      agent: {
        __caption__: 'Агент',
        name: {
          __caption__: 'Имя агента'
        },
        login: {
          __caption__: 'Логин'
        },
        isUser: {
          __caption__: 'Пользователь'
        },
        isRole: {
          __caption__: 'Роль'
        }
      },
      access: {
        __caption__: 'Доступ',
        typeAccess: {
          __caption__: 'Тип доступа'
        }
      }
    },
    Sec_PermitionE: {
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
      },
      access: {
        __caption__: 'Доступ',
        typeAccess: {
          __caption__: 'Тип доступа'
        }
      }
    },
    Sec_PermitionL: {
      subject: {
        __caption__: 'Субъект',
        name: {
          __caption__: 'Имя субъекта'
        }
      },
      agent: {
        __caption__: 'Агент',
        name: {
          __caption__: 'Имя агента'
        },
        isUser: {
          __caption__: 'Пользователь'
        },
        isGroup: {
          __caption__: 'Группа'
        },
        isRole: {
          __caption__: 'Роль'
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
  },
  validations: {
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
    },
    agent: {
      __caption__: 'Агент'
    },
    subject: {
      __caption__: 'Субъект'
    },
    access: {
      __caption__: 'Access'
    }
  }
};
