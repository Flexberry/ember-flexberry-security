export default {
  projections: {
    AuditView: {
      agent: {
        caption: 'agent',
        name: {
          caption: 'name'
        },
        login: {
          caption: 'login'
        }
      },
      subject: {
        caption: 'subject',
        name: {
          caption: 'name'
        }
      },
      access: {
        caption: 'access',
        typeAccess: {
          caption: 'typeAccess'
        },
        filter: {
          caption: 'filter',
          name: {
            caption: 'name'
          },
          filterText: {
            caption: 'filterText'
          }
        },
        permition: {
          caption: 'permition',
          agent: {
            caption: 'agent',
            name: {
              caption: 'name'
            },
            login: {
              caption: 'login'
            }
          },
          subject: {
            caption: 'subject',
            name: {
              caption: 'name'
            }
          }
        }
      }
    },
    CheckAccessOnObject: {
      subject: {
        caption: 'subject',
        isAttribute: {
          caption: 'isAttribute'
        },
        isOperation: {
          caption: 'isOperation'
        },
        isView: {
          caption: 'isView'
        },
        isClass: {
          caption: 'isClass'
        },
        name: {
          caption: 'name'
        }
      },
      agent: {
        caption: 'agent',
        name: {
          caption: 'name'
        },
        login: {
          caption: 'login'
        },
        isUser: {
          caption: 'isUser'
        },
        isGroup: {
          caption: 'isGroup'
        },
        isRole: {
          caption: 'isRole'
        }
      },
      access: {
        caption: 'access',
        filter: {
          caption: 'filter',
          filterText: {
            caption: 'filterText'
          },
          name: {
            caption: 'name'
          }
        },
        typeAccess: {
          caption: 'typeAccess'
        }
      }
    },
    CheckAccessOperation: {
      subject: {
        caption: 'subject',
        name: {
          caption: 'name'
        },
        isOperation: {
          caption: 'isOperation'
        }
      },
      agent: {
        caption: 'agent'
      }
    },
    Sec_CheckClasses: {
      subject: {
        caption: 'subject',
        name: {
          caption: 'name'
        },
        isOperation: {
          caption: 'isOperation'
        },
        isClass: {
          caption: 'isClass'
        }
      },
      agent: {
        caption: 'agent',
        name: {
          caption: 'name'
        },
        login: {
          caption: 'login'
        },
        isUser: {
          caption: 'isUser'
        },
        isRole: {
          caption: 'isRole'
        }
      }
    },
    Sec_CheckClassesAndGetDetails: {
      subject: {
        caption: 'subject',
        name: {
          caption: 'name'
        },
        isOperation: {
          caption: 'isOperation'
        },
        isClass: {
          caption: 'isClass'
        }
      },
      agent: {
        caption: 'agent',
        name: {
          caption: 'name'
        },
        login: {
          caption: 'login'
        },
        isUser: {
          caption: 'isUser'
        },
        isRole: {
          caption: 'isRole'
        }
      },
      access: {
        caption: 'access',
        typeAccess: {
          caption: 'typeAccess'
        }
      }
    },
    Sec_PermitionE: {
      agent: {
        caption: 'agent',
        name: {
          caption: 'name'
        }
      },
      subject: {
        caption: 'subject',
        name: {
          caption: 'name'
        }
      },
      access: {
        caption: 'access',
        typeAccess: {
          caption: 'typeAccess'
        }
      }
    },
    Sec_PermitionL: {
      subject: {
        caption: 'subject',
        name: {
          caption: 'name'
        }
      },
      agent: {
        caption: 'agent',
        name: {
          caption: 'name'
        },
        isUser: {
          caption: 'isUser'
        },
        isGroup: {
          caption: 'isGroup'
        },
        isRole: {
          caption: 'isRole'
        }
      },
      createTime: {
        caption: 'createTime'
      },
      creator: {
        caption: 'creator'
      },
      editTime: {
        caption: 'editTime'
      },
      editor: {
        caption: 'editor'
      }
    }
  }
};
