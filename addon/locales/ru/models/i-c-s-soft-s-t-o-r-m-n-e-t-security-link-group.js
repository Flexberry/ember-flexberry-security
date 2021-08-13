export default {
  projections: {
    AuditView: {
      group: {
        __caption__: 'Группа',
        name: {
          __caption__: 'Имя группы'
        }
      },
      user: {
        __caption__: 'Пользователь',
        name: {
          __caption__: 'Имя пользователя'
        },
        login: {
          __caption__: 'Логин пользователя'
        }
      }
    },
    GetGroupsNameByUserKey: {
      group: {
        __caption__: 'Группа',
        name: {
          __caption__: 'Наименование'
        },
        isGroup: {
          __caption__: 'Группа'
        },
        enabled: {
          __caption__: 'Актуальна'
        }
      },
      user: {
        __caption__: 'Пользователь'
      }
    },
    GetUserByUsername: {
      group: {
        __caption__: 'Группа',
        name: {
          __caption__: 'Наименование'
        },
        isGroup: {
          __caption__: 'Группа'
        },
        enabled: {
          __caption__: 'Актуальна'
        }
      },
      user: {
        __caption__: 'Пользователь'
      }
    },
    LinkedAgents: {
      group: {
        __caption__: 'Группа'
      },
      user: {
        __caption__: 'Пользователь'
      }
    },
    SearchLinkGroup: {
      user: {
        __caption__: 'Пользователь',
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
      group: {
        __caption__: 'Группа',
        isUser: {
          __caption__: 'Пользователь'
        },
        isGroup: {
          __caption__: 'Группа'
        },
        isRole: {
          __caption__: 'Роль'
        }
      }
    },
    Sec_LinkGroupE: {
      user: {
        __caption__: 'Пользователь',
        name: {
          __caption__: 'Имя'
        }
      },
      group: {
        __caption__: 'Группа',
        name: {
          __caption__: 'Наименование'
        }
      }
    },
    Sec_LinkGroupL: {
      user: {
        __caption__: 'Пользователь',
        name: {
          __caption__: 'Имя пользователя'
        }
      },
      group: {
        __caption__: 'Группа',
        name: {
          __caption__: 'Наименование'
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
    group: {
      __caption__: 'Группа'
    },
    user: {
      __caption__: 'Пользователь'
    }
  }
};
