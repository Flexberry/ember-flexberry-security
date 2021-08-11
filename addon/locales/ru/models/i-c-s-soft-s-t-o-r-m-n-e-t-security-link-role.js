export default {
  projections: {
    AuditView: {
      startDate: {
        __caption__: 'Дата начала'
      },
      endDate: {
        __caption__: 'Дата окончания'
      },
      role: {
        __caption__: 'Роль',
        name: {
          __caption__: 'Имя роли'
        }
      },
      agent: {
        __caption__: 'Агент',
        name: {
          __caption__: 'Имя агента'
        },
        login: {
          __caption__: 'Логин агента'
        }
      }
    },
    GetParentRoles: {
      agent: {
        __caption__: 'Агент',
        name: {
          __caption__: 'Имя агента'
        },
        isRole: {
          __caption__: 'Роль'
        }
      },
      role: {
        __caption__: 'Роль',
        name: {
          __caption__: 'Наименование роли'
        },
        isRole: {
          __caption__: 'Роль'
        }
      },
      startDate: {
        __caption__: 'Начальная дата'
      },
      endDate: {
        __caption__: 'Конечная дата'
      }
    },
    LinkedAgents: {
      startDate: {
        __caption__: 'Начальная дата'
      },
      endDate: {
        __caption__: 'Конечная дата'
      },
      agent: {
        __caption__: 'Агент'
      },
      role: {
        __caption__: 'Роль'
      }
    },
    SearchLinkRole: {
      agent: {
        __caption__: 'Агент',
        name: {
          __caption__: 'Имя агента'
        },
        login: {
          __caption__: 'Логин'
        },
        enabled: {
          __caption__: 'Актуален'
        },
        isRole: {
          __caption__: 'Роль'
        },
        isUser: {
          __caption__: 'Пользователь'
        }
      },
      role: {
        __caption__: 'Роль',
        name: {
          __caption__: 'Наименование роли'
        },
        login: {
          __caption__: 'Логин'
        },
        isUser: {
          __caption__: 'Пользователь'
        },
        isRole: {
          __caption__: 'Роль'
        },
        enabled: {
          __caption__: 'Актуальна'
        }
      },
      startDate: {
        __caption__: 'Начальная дата'
      },
      endDate: {
        __caption__: 'Конечная дата'
      }
    },
    Sec_GetRoles: {
      role: {
        __caption__: 'Роль',
        name: {
          __caption__: 'Наименование роли'
        }
      },
      agent: {
        __caption__: 'Агент',
        name: {
          __caption__: 'Имя агента'
        },
        login: {
          __caption__: 'Логин'
        }
      },
      startDate: {
        __caption__: 'Начальная дата'
      },
      endDate: {
        __caption__: 'Конечная дата'
      }
    },
    Sec_LinkRoleE: {
      role: {
        __caption__: 'Роль',
        name: {
          __caption__: 'Наименование роли'
        }
      },
      agent: {
        __caption__: 'Агент',
        name: {
          __caption__: 'Имя агента'
        }
      },
      startDate: {
        __caption__: 'Начальная дата'
      },
      endDate: {
        __caption__: 'Конечная дата'
      }
    },
    Sec_LinkRoleL: {
      role: {
        __caption__: 'Роль',
        name: {
          __caption__: 'Наименование роли'
        }
      },
      agent: {
        __caption__: 'Агент',
        name: {
          __caption__: 'Имя агента'
        },
        login: {
          __caption__: 'Логин'
        }
      },
      startDate: {
        __caption__: 'Начальная дата'
      },
      endDate: {
        __caption__: 'Конечная дата'
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
    startDate: {
      __caption__: 'Дата начала'
    },
    endDate: {
      __caption__: 'Дата окончания'
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
    },
    role: {
      __caption__: 'Роль'
    },
    agent: {
      __caption__: 'Агент'
    }
  }
};
