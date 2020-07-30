export default {
  promptLabels: {
    actionRemove: "是否要删除此事件？",
    actionExclude: "是否要删除当前发生的事件？",
    actionCancel: "是否要取消此事件？",
    actionUncancel: "是否要不取消此事件？",
    actionSetStart: "是否要将此事件设置为第一个事件？",
    actionSetEnd: "是否要将此事件设置为最后一次？",
    actionMove: "是否要移动此事件？",
    actionInclude: "是否要添加事件？",
    move: "确定要移动此事件吗？",
    toggleAllDay: "是否要更改此事件是否全天发生？",
    removeExistingTime: "是否要删除此时发生的所有事件？",
  },
  placeholder: {
    noTitle: "(无题)",
  },
  patterns: {
    lastDay: () => "月的最后一天",
    lastDayOfMonth: (day) => day.format("MMMM") + "最后一天",
    lastWeekday: (day) => "上" + day.format("dddd") + "周" + day.format("MMMM"),
  },
  colors: [
    { text: "红" },
    { text: "粉红" },
    { text: "紫" },
    { text: "深紫" },
    { text: "靛蓝" },
    { text: "蓝" },
    { text: "胶水色" },
    { text: "浅蓝" },
    { text: "青" },
    { text: "墨绿" },
    { text: "绿" },
    { text: "浅绿" },
    { text: "石灰色" },
    { text: "黄" },
    { text: "琥珀色" },
    { text: "橙" },
    { text: "深橙" },
    { text: "褐色" },
    { text: "蓝灰" },
    { text: "棕色" },
    { text: "黑色" },
  ],
  icons: [
    { text: "警报" },
    { text: "星" },
    { text: "喜欢" },
    { text: "操作" },
    { text: "安排" },
    { text: "警告" },
    { text: "钱" },
    { text: "充电" },
    { text: "家" },
    { text: "游玩" },
    { text: "邮箱" },
    { text: "手机" },
    { text: "图标" },
    { text: "骑自行车" },
    { text: "旅行" },
  ],
  defaults: {
    dsDay: {
      formats: {
        month: "MMM",
      },
    },
    dsCalendarApp: {
      types: [
        { label: "天" },
        { label: "周" },
        { label: "月" },
        { label: "年" },
        { label: "日程表" },
        { label: "4天" },
      ],
      formats: {
        today: "dddd, MMMM D",
        xs: "MMM",
      },
      labels: {
        next: (type) => (type ? "下 " + type.label.toLowerCase() : "下"),
        prev: (type) => (type ? "上 " + type.label.toLowerCase() : "上"),
        moveCancel: "取消移动",
        moveSingleEvent: "移动事件",
        moveOccurrence: "移动目前仅发生的事件",
        moveAll: "移动所有发生的事件",
        moveDuplicate: "添加发生的事件",
        promptConfirm: "确定",
        promptCancel: "取消",
        today: "今天",
      },
    },
    dsAgendaEvent: {
      formats: {
        firstLine: "ddd",
        secondLine: "MMM Do",
        start: "dddd, MMMM D",
        time: "h:mm a",
      },
      labels: {
        allDay: "全天",
        options: "操作",
        close: "关闭",
        day: ["天", "天"],
        days: ["天", "天"],
        minute: ["分钟", "分钟"],
        minutes: ["分钟", "分钟"],
        hour: ["小时", "小时"],
        hours: ["小时", "小时"],
        week: ["周", "周"],
        weeks: ["周", "周"],
        second: ["秒", "秒"],
        seconds: ["秒", "秒"],
        busy: "忙碌",
        free: "空闲",
      },
    },
    dsCalendarEventChip: {
      formats: {
        fullDay: "ddd MMM Do YYYY",
        timed: "ddd MMM Do YYYY",
      },
    },
    dsCalendarEventPopover: {
      formats: {
        start: "dddd, MMMM D",
        time: "h:mm a",
      },
      labels: {
        allDay: "全天",
        options: "操作",
        close: "关闭",
        day: ["天", "天"],
        days: ["天", "天"],
        minute: ["分钟", "分钟"],
        minutes: ["分钟", "分钟"],
        hour: ["小时", "小时"],
        hours: ["小时", "小时"],
        week: ["周", "周"],
        weeks: ["周", "周"],
        second: ["秒", "秒"],
        seconds: ["秒", "秒"],
        busy: "忙碌",
        free: "空闲",
      },
    },
    dsCalendarEventCreatePopover: {
      formats: {
        start: "dddd, MMMM D",
        time: "h:mm a",
      },
      labels: {
        title: "添加标题",
        allDay: "全天",
        options: "操作",
        close: "关闭",
        day: ["天", "天"],
        days: ["天", "天"],
        minute: ["分钟", "分钟"],
        minutes: ["分钟", "分钟"],
        hour: ["小时", "小时"],
        hours: ["小时", "小时"],
        week: ["周", "周"],
        weeks: ["周", "周"],
        second: ["秒", "秒"],
        seconds: ["秒", "秒"],
        busy: "忙碌",
        free: "空闲",
        location: "添加地址",
        description: "添加描述",
        calendar: "行程记录",
      },
      busyOptions: [{ text: "忙碌" }, { text: "空闲" }],
    },
    dsSchedule: {
      labels: {
        editCustom: "编辑",
      },
    },
    dsEvent: {
      labels: {
        moreActions: "更多操作...",
        cancel: "取消事件更改",
        save: "保存",
        title: "标题",
        exclusions:
          "这些是正常发生的事件从计划中排除的事件或时间跨度。如果移动事件发生，则在此处排除事件。",
        inclusions:
          "这些是事件或时间跨度，事件被添加到正常发生的计划之外。如果移动事件发生，则在此处添加事件。",
        cancelled: "这些是取消事件的事件或时间跨度",
        edit: "编辑事件",
        add: "添加事件",
        location: "添加地址",
        description: "添加描述",
        calendar: "行程记录",
        tabs: {
          details: "事件详情",
          forecast: "预测",
          removed: "已删除",
          added: "已添加",
          cancelled: "已取消",
        },
      },
      busyOptions: [{ text: "忙绿" }, { text: "空闲" }],
    },
    dsScheduleActions: {
      labels: {
        remove: "移除事件",
        exclude: "移除发生的事件",
        cancel: "取消事件",
        uncancel: "不取消",
        move: "移动事件",
        include: "添加新的事件",
        setStart: "设置为第一个",
        setEnd: "设置为最后一个",
        pickerOk: "确定",
        pickerCancel: "取消",
      },
    },
    dsScheduleForecast: {
      labels: {
        prefix: "预测显示上一个和下一个",
        suffix: "一年内发生的事件。",
      },
    },
    dsScheduleFrequencyDay: {
      labels: {
        type: "天",
      },
      options: [
        { text: "任何一天" },
        { text: "在接下来的几天..." },
        { text: "每隔 _ 天 开始 _" },
      ],
      types: [
        { text: "一月内的某天" },
        { text: "月末" },
        { text: "一年内的某天" },
      ],
    },
    dsScheduleFrequencyDayOfWeek: {
      weekdays: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      labels: {
        type: "一周中的几天",
      },
      options: [
        { text: "一周中的任何一天" },
        { text: "在接下来的一周中的任何一天..." },
        { text: "每隔 _ 周工作日 开始 _" },
        { text: "周末" },
        { text: "周工作日" },
      ],
    },
    dsScheduleFrequencyMonth: {
      labels: {
        type: "月",
      },
      months: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
      options: [
        { text: "任何月份" },
        { text: "在接下来的几个月..." },
        { text: "每隔 _ 月 开始 _" },
      ],
    },

    dsScheduleFrequencyWeek: {
      labels: {
        type: "周",
      },
      options: [
        { text: "任何周" },
        { text: "在接下来的几周..." },
        { text: "每隔 _ 周 开始 _" },
      ],
      types: [
        { text: "每月的一周（第一周有一个星期四）" },
        { text: "本月的周数（从月的第一天开始）" },
        { text: "每月的整周（第0周=前一周，如果有）" },
        { text: "本月的最后一周范围（从每月的最后一天开始）" },
        { text: "每月的最后一整周（0=如果有，则为后一周）" },
        { text: "一年中的一周（第一周有一个星期四）" },
        { text: "一年中的工作周（从每年的第一天开始）" },
        { text: "一年中的整周（第0周=前一周，如果有）" },
        { text: "一年中的最后一周（从每年的最后一天开始）" },
        { text: "一年中的最后一个整周（第0个=如果有后一周）" },
      ],
    },

    dsScheduleFrequencyYear: {
      labels: {
        type: "年",
      },
      options: [
        { text: "任何年份" },
        { text: "在接下来的几年..." },
        { text: "每隔 _ 年 开始 _" },
      ],
    },

    dsScheduleSpan: {
      labels: {
        startless: "开始时间",
        endless: "结束时间",
      },
      formats: {
        start: "MMMM Do, YYYY",
        end: "MMMM Do, YYYY",
      },
    },

    dsScheduleTime: {
      labels: {
        remove: "移除时刻",
        add: "添加时刻",
      },
    },

    dsScheduleTimes: {
      labels: {
        all: "全天",
        minute: "分钟",
        minutes: "分钟",
        hour: "小时",
        hours: "小时",
        day: "天",
        days: "天",
        week: "周",
        weeks: "周",
        month: "月",
        months: "月",
        second: "秒",
        seconds: "秒",
      },
    },

    dsScheduleType: {
      formats: {
        date: "LL",
      },
    },

    dsScheduleTypeCustomDialog: {
      labels: {
        save: "保存",
        cancel: "取消",
      },
    },

    dsWeekDayHeader: {
      formats: {
        weekday: "ddd",
      },
    },

    dsWeeksView: {
      weekdays: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    },

    dsDaysView: {
      hours: [
        "    ",
        "1am",
        "2am",
        "3am",
        "4am",
        "5am",
        "6am",
        "7am",
        "8am",
        "9am",
        "10am",
        "11am",
        "12pm",
        "1pm",
        "2pm",
        "3pm",
        "4pm",
        "5pm",
        "6pm",
        "7pm",
        "8pm",
        "9pm",
        "10pm",
        "11pm",
      ],
    },

    dsDayPicker: {
      weekdays: ["日", "一", "二", "三", "四", "五", "六"],
      labels: {
        prevMonth: "上个月",
        nextMonth: "下个月",
      },
    },
  },
};
