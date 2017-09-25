export default {
  projections: {
    AuditView: {
      group: {
        __caption__: 'Group',
        name: {
          __caption__: 'Name'
        }
      },
      user: {
        __caption__: 'User',
        name: {
          __caption__: 'Name'
        },
        login: {
          __caption__: 'Login'
        }
      }
    },
    GetGroupsNameByUserKey: {
      group: {
        __caption__: 'Group',
        name: {
          __caption__: 'Name'
        },
        isGroup: {
          __caption__: 'Group'
        },
        enabled: {
          __caption__: 'Enabled'
        }
      },
      user: {
        __caption__: 'User'
      }
    },
    GetUserByUsername: {
      group: {
        __caption__: 'Group',
        name: {
          __caption__: 'Name'
        },
        isGroup: {
          __caption__: 'Group'
        },
        enabled: {
          __caption__: 'Enabled'
        }
      },
      user: {
        __caption__: 'User'
      }
    },
    LinkedAgents: {
      group: {
        __caption__: 'Group'
      },
      user: {
        __caption__: 'User'
      }
    },
    SearchLinkGroup: {
      user: {
        __caption__: 'Userr',
        isUser: {
          __caption__: 'User'
        },
        isGroup: {
          __caption__: 'Group'
        },
        isRole: {
          __caption__: 'Role'
        }
      },
      group: {
        __caption__: 'Group',
        isUser: {
          __caption__: 'User'
        },
        isGroup: {
          __caption__: 'Group'
        },
        isRole: {
          __caption__: 'Role'
        }
      }
    },
    Sec_LinkGroupE: {
      user: {
        __caption__: 'User',
        name: {
          __caption__: 'Name'
        }
      },
      group: {
        __caption__: 'Group',
        name: {
          __caption__: 'Name'
        }
      }
    },
    Sec_LinkGroupL: {
      user: {
        __caption__: 'User',
        name: {
          __caption__: 'Name'
        }
      },
      group: {
        __caption__: 'Group',
        name: {
          __caption__: 'Name'
        }
      },
      createTime: {
        __caption__: 'Create time'
      },
      creator: {
        __caption__: 'Creator'
      },
      editTime: {
        __caption__: 'Edit time'
      },
      editor: {
        __caption__: 'Editor'
      }
    }
  }
};
