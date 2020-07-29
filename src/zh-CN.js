export default {
    promptLabels: {
      actionRemove:       '是否确实要删除此事件？',
      actionExclude:      '是否确实要删除当前发生的事件？',
      actionCancel:       '是否确实要取消此活动？',
      actionUncancel:     '是否确实要不取消此活动？',
      actionSetStart:     '是否确实要将此事件设置为第一个事件？',
      actionSetEnd:       '是否确实要将此事件设置为最后一次？',
      actionMove:         '是否确实要移动此事件？',
      actionInclude:      '是否确实要添加事件事件？',
      move:               '确定要移动此事件吗？',
      toggleAllDay:       '是否确定要更改此事件是否全天发生？',
      removeExistingTime: '是否确实要删除此时发生的所有事件？'
    },
    placeholder: {
      noTitle: '(无题)'
    },
    patterns: {
      lastDay:        (day) => '月的最后一天',
      lastDayOfMonth: (day) => day.format('MMMM') + '最后一天',
      lastWeekday:    (day) => '上' + day.format('dddd') + '周' + day.format('MMMM')
    },
    colors: [
      { text: '红' },
      { text: '粉红' },
      { text: '紫' },
      { text: '深紫' },
      { text: '靛蓝' },
      { text: '蓝' },
      { text: '胶水色' },
      { text: '浅蓝' },
      { text: '青' },
      { text: '墨绿' },
      { text: '绿' },
      { text: '浅绿' },
      { text: '石灰色' },
      { text: '黄' },
      { text: '琥珀色' },
      { text: '橙' },
      { text: '深橙' },
      { text: '褐色' },
      { text: '蓝灰' },
      { text: '棕色' },
      { text: '黑色' }
    ],
    icons: [
      { text: '警报' },
      { text: '星' },
      { text: '喜欢' },
      { text: '操作' },
      { text: '安排' },
      { text: '警告' },
      { text: '钱' },
      { text: '充电' },
      { text: '家' },
      { text: '游玩' },
      { text: '邮箱' },
      { text: '手机' },
      { text: '图标' },
      { text: '骑自行车' },
      { text: '旅行' }
    ],
    defaults: {
      dsDay: {
        formats: {
          month:  'MMM'
        }
      },
      dsCalendarApp: {
        types: [
          { label: '天' },
          { label: '周' },
          { label: '月' },
          { label: '年' },
          { label: '日程表' },
          { label: '4天' }
        ],
        formats: {
          today: 'dddd, MMMM D',
          xs: 'MMM'
        },
        labels: {
          next: (type) => type ? 'Next ' + type.label.toLowerCase() : 'Next',
          prev: (type) => type ? 'Previous ' + type.label.toLowerCase() : 'Previous',
          moveCancel: '取消移动',
          moveSingleEvent: '移动事件',
          moveOccurrence: '移动目前仅发生的事件',
          moveAll: '移动所有发生的事件',
          moveDuplicate: '添加发生的事件',
          promptConfirm: '确定',
          promptCancel: '取消',
          today: '今天'
        }
      },
      dsAgendaEvent: {
        formats: {
          firstLine:  'ddd',
          secondLine: 'MMM Do',
          start:      'dddd, MMMM D',
          time:       'h:mm a'
        },
        labels: {
          allDay:   '全天',
          options:  '操作',
          close:    '关闭',
          day:      ['天', '天'],
          days:     ['天', '天'],
          minute:   ['分钟', '分钟'],
          minutes:  ['分钟', '分钟'],
          hour:     ['小时', '小时'],
          hours:    ['小时', '小时'],
          week:     ['周', '周'],
          weeks:    ['周', '周'],
          second:   ['秒', '秒'],
          seconds:  ['秒', '秒'],
          busy:     '忙碌',
          free:     '空闲'
        }
      },
      dsCalendarEventChip: {
        formats: {
          fullDay:          'ddd MMM Do YYYY',
          timed:            'ddd MMM Do YYYY'
        }
      },
      dsCalendarEventPopover: {
        formats: {
          start:    'dddd, MMMM D',
          time:     'h:mm a'
        },
        labels: {
            allDay:   '全天',
            options:  '操作',
            close:    '关闭',
            day:      ['天', '天'],
            days:     ['天', '天'],
            minute:   ['分钟', '分钟'],
            minutes:  ['分钟', '分钟'],
            hour:     ['小时', '小时'],
            hours:    ['小时', '小时'],
            week:     ['周', '周'],
            weeks:    ['周', '周'],
            second:   ['秒', '秒'],
            seconds:  ['秒', '秒'],
            busy:     '忙碌',
            free:     '空闲'
        }
      },
      dsCalendarEventCreatePopover: {
        formats: {
          start:    'dddd, MMMM D',
          time:     'h:mm a'
        },
        labels: {
          title:    '添加标题',
          allDay:   '全天',
          options:  '操作',
          close:    '关闭',
          day:      ['天', '天'],
          days:     ['天', '天'],
          minute:   ['分钟', '分钟'],
          minutes:  ['分钟', '分钟'],
          hour:     ['小时', '小时'],
          hours:    ['小时', '小时'],
          week:     ['周', '周'],
          weeks:    ['周', '周'],
          second:   ['秒', '秒'],
          seconds:  ['秒', '秒'],
          busy:     '忙碌',
          free:     '空闲',
          location: '添加地址',
          description: 'Add description',
          calendar: 'Calendar',
        },
        busyOptions: [
          {text: '忙碌'},
          {text: '空闲'}
        ]
      },
      dsSchedule: {
        labels: {
          editCustom:   '编辑'
        }
      },
      dsEvent: {
        labels: {
          moreActions:  '更多操作。。。',
          cancel:       '取消事件更改',
          save:         '保存',
          title:        '标题',
          exclusions:   '这些是正常发生的事件从计划中排除的事件或时间跨度。如果移动事件发生，则在此处排除事件。',
          inclusions:   '这些是事件或时间跨度，事件被添加到正常发生的计划之外。如果移动事件发生，则在此处添加事件。',
          cancelled:    '这些是取消事件的事件或时间跨度',
          edit:         '编辑事件',
          add:          '添加事件',
          location:     '添加地址',
          description:  '添加描述',
          calendar:     '行程表',
          tabs: {
            details:    '事件详情',
            forecast:   '预测',
            removed:    '已删除',
            added:      '已添加',
            cancelled:  '已取消'
          }
        },
        busyOptions: [
          {text: '忙绿'},
          {text: '空闲'}
        ]
      },
      dsScheduleActions: {
        labels: {
          remove:     '移除这个事件',
          exclude:    'Remove this occurrence',
          cancel:     'Cancel this occurrence',
          uncancel:   'Undo cancellation',
          move:       'Move this occurrence',
          include:    'Add new occurrence',
          setStart:   'Set as first occurrence',
          setEnd:     'Set as last occurrence',
          pickerOk:   'OK',
          pickerCancel:'Cancel'
        }
      },
      dsScheduleForecast: {
        labels: {
          prefix:     'The forecast shows previous & next',
          suffix:     'event occurrences within a years time.'
        }
      },
      dsScheduleFrequencyDay: {
        labels: {
          type: 'Days'
        },
        options: [
          { text: 'Any day' },
          { text: 'On the following days...' },
          { text: 'Every _ days starting on _' }
        ],
        types: [
          { text: 'Day of the month' },
          { text: 'Last day of the month' },
          { text: 'Day of the year' }
        ]
      },
      dsScheduleFrequencyDayOfWeek: {
        weekdays: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        labels: {
          type: 'Days of week'
        },
        options: [
          { text: 'Any day of the week' },
          { text: 'On the following days of the week...' },
          { text: 'Every _ weekday starting on _' },
          { text: 'Weekends' },
          { text: 'Weekdays' }
        ]
      },
      dsScheduleFrequencyMonth: {
        labels: {
          type: 'Months'
        },
        months: [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'October',
          'November',
          'December'
        ],
        options: [
          { text: 'Any month' },
          { text: 'On the following months...' },
          { text: 'Every _ months starting on _' }
        ]
      },
  
      dsScheduleFrequencyWeek: {
        labels: {
          type: '周'
        },
        options: [
          { text: 'Any week' },
          { text: 'On the following weeks...' },
          { text: 'Every _ weeks starting on _' }
        ],
        types: [
          { text: 'Week of the month (first week has a Thursday)' },
          { text: 'Weekspan of the month (starts on first day of month)' },
          { text: 'Full week of the month (0th = the week before if any)' },
          { text: 'Last weekspan of the month (starts on last day of month)' },
          { text: 'Last full week of the month (0th = the week after if any)' },
          { text: 'Week of the year (first week has a Thursday)' },
          { text: 'Weekspan of the year (starts on first day of year)' },
          { text: 'Full week of the year (0th = the week before if any)' },
          { text: 'Last weekspan of the year (starts on last day of year)' },
          { text: 'Last full week of the year (0th = the week after if any)' }
        ]
      },
  
      dsScheduleFrequencyYear: {
        labels: {
          type: '年'
        },
        options: [
          { text: 'Any year' },
          { text: 'On the following years...' },
          { text: 'Every _ years starting on _' }
        ]
      },
  
      dsScheduleSpan: {
        labels: {
          startless:  '开始时间',
          endless:    '结束时间'
        },
        formats: {
          start:      'MMMM Do, YYYY',
          end:        'MMMM Do, YYYY'
        }
      },
  
      dsScheduleTime: {
        labels: {
          remove:     '移除时刻',
          add:        '添加时刻'
        }
      },
  
      dsScheduleTimes: {
        labels: {
          all:        'All day',
          minute:     'minute',
          minutes:    'minutes',
          hour:       'hour',
          hours:      'hours',
          day:        'day',
          days:       'days',
          week:       'week',
          weeks:      'weeks',
          month:      'month',
          months:     'months',
          second:     'second',
          seconds:    'seconds'
          
        }
      },
  
      dsScheduleType: {
        formats: {
          date:       'LL'
        }
      },
  
      dsScheduleTypeCustomDialog: {
        labels: {
          save:     '保存',
          cancel:   '取消'
        }
      },
  
      dsWeekDayHeader: {
        formats: {
          weekday:    'ddd'
        }
      },
  
      dsWeeksView: {
        weekdays: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
      },
  
      dsDaysView: {
        hours: [
          '    ', '1am', '2am', '3am', '4am', '5am', '6am', '7am', '8am', '9am', '10am', '11am',
          '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm', '10pm', '11pm'
        ]
      },
  
      dsDayPicker: {
        weekdays: ['周日', '周一', '周二', '周三', '周四', '周五', '周六'],
        labels: {
          prevMonth: '上个月',
          nextMonth: '下个月'
        }
      }
    }
  }