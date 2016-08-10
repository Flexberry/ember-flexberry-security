export default {
  projections: {
    AuditView: {
      agent: {
        caption: 'Агент',
        name: {
          caption: 'Имя агента'
        },
        login: {
          caption: 'Логин агента'
        }
      },
      subject: {
        caption: 'Субъект',
        name: {
          caption: 'Имя субъекта'
        }
      },
      access: {
        caption: 'Access',
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
      }
    },
    CheckAccessOnObject: {
      subject: {
        caption: '',
        isAttribute: {
          caption: ''
        },
        isOperation: {
          caption: ''
        },
        isView: {
          caption: ''
        },
        isClass: {
          caption: ''
        },
        name: {
          caption: ''
        }
      },
      agent: {
        caption: '',
        name: {
          caption: ''
        },
        login: {
          caption: ''
        },
        isUser: {
          caption: ''
        },
        isGroup: {
          caption: ''
        },
        isRole: {
          caption: ''
        }
      },
      access: {
        caption: '',
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
      }
    },
    CheckAccessOperation: {
      subject: {
        caption: '',
        name: {
          caption: ''
        },
        isOperation: {
          caption: ''
        }
      },
      agent: {
        caption: ''
      }
    },
    Sec_CheckClasses: {
      subject: {
        caption: '',
        name: {
          caption: ''
        },
        isOperation: {
          caption: ''
        },
        isClass: {
          caption: ''
        }
      },
      agent: {
        caption: '',
        name: {
          caption: ''
        },
        login: {
          caption: ''
        },
        isUser: {
          caption: ''
        },
        isRole: {
          caption: ''
        }
      }
    },
    Sec_CheckClassesAndGetDetails: {
      subject: {
        caption: '',
        name: {
          caption: ''
        },
        isOperation: {
          caption: ''
        },
        isClass: {
          caption: ''
        }
      },
      agent: {
        caption: '',
        name: {
          caption: ''
        },
        login: {
          caption: ''
        },
        isUser: {
          caption: ''
        },
        isRole: {
          caption: ''
        }
      },
      access: {
        caption: 'Доступ',
        typeAccess: {
          caption: 'Тип доступа'
        }
      }
    },
    Sec_PermitionE: {
      agent: {
        caption: 'Агент',
        name: {
          caption: ''
        }
      },
      subject: {
        caption: 'Субъект',
        name: {
          caption: ''
        }
      },
      access: {
        caption: 'Доступ',
        typeAccess: {
          caption: 'Тип доступа'
        }
      }
    },
    Sec_PermitionL: {
      subject: {
        caption: '',
        name: {
          caption: 'Субъект'
        }
      },
      agent: {
        caption: '',
        name: {
          caption: 'Агент'
        },
        isUser: {
          caption: 'Юзер'
        },
        isGroup: {
          caption: 'Группа'
        },
        isRole: {
          caption: 'Роль'
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
