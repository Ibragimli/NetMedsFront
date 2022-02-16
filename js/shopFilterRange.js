$("#input").slider({
    id: "",
    min: 0,
    max: 10,
    step: 1,
    precision: 0,
    orientation: 'horizontal',
    value: 5,
    range: false,
    selection: 'before',

    tooltip: 'show',

    tooltip_split: false,

    lock_to_ticks: false,

    handle: 'round',

    reversed: false,

    rtl: 'auto',

    enabled: true,

    formatter: function formatter(val) {
        if (Array.isArray(val)) {
            return val[0] + " : " + val[1];
        } else {
            return val;
        }
    },
    natural_arrow_keys: false,
    ticks: [],
    ticks_positions: [],

    ticks_labels: [],

    ticks_snap_bounds: 0,

    ticks_tooltip: false,

    tooltip_position: null,

    scale: 'linear',

    focus: false,

    labelledby: null,

    rangeHighlights: []

});