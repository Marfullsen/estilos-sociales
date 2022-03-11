export default function humanizar_lapso(
  date,
  ref_date,
  date_formats,
  time_units
) {
  //Date Formats must be be ordered smallest -> largest and must end in a format with ceiling of null
  date_formats = date_formats || {
    past: [
      { ceiling: 60, text: "hace menos de un minuto" },
      { ceiling: 120, text: "hace un minuto" },
      { ceiling: 3600, text: "hace $minutes minutos" },
      { ceiling: 7200, text: "hace una hora" },
      { ceiling: 86400, text: "hace $hours horas" },
      { ceiling: 172800, text: "hace un día" },
      { ceiling: 2629744, text: "hace $days días" },
      { ceiling: 5259488, text: "hace un mes" },
      { ceiling: 31556926, text: "hace $months meses" },
      { ceiling: 34186670, text: "hace un año" },
      { ceiling: null, text: "hace $years años" },
    ],
    future: [
      { ceiling: 60, text: "en $seconds segundos" },
      { ceiling: 3600, text: "en $minutes minutos" },
      { ceiling: 86400, text: "en $hours horas" },
      { ceiling: 2629744, text: "en $days días" },
      { ceiling: 31556926, text: "en $months meses" },
      { ceiling: null, text: "en $years años" },
    ],
  };
  //Time units must be be ordered largest -> smallest
  time_units = time_units || [
    [31556926, "years"],
    [2629744, "months"],
    [86400, "days"],
    [3600, "hours"],
    [60, "minutes"],
    [1, "seconds"],
  ];

  date = new Date(date);
  ref_date = ref_date ? new Date(ref_date) : new Date();
  var seconds_difference = (ref_date - date) / 1000;

  var tense = "past";
  if (seconds_difference < 0) {
    tense = "future";
    seconds_difference = 0 - seconds_difference;
  }

  function get_format() {
    for (var i = 0; i < date_formats[tense].length; i++) {
      if (
        date_formats[tense][i].ceiling == null ||
        seconds_difference <= date_formats[tense][i].ceiling
      ) {
        return date_formats[tense][i];
      }
    }
    return null;
  }

  function get_time_breakdown() {
    var seconds = seconds_difference;
    var breakdown = {};
    for (var i = 0; i < time_units.length; i++) {
      var occurences_of_unit = Math.floor(seconds / time_units[i][0]);
      seconds = seconds - time_units[i][0] * occurences_of_unit;
      breakdown[time_units[i][1]] = occurences_of_unit;
    }
    return breakdown;
  }

  function render_date(date_format) {
    var breakdown = get_time_breakdown();
    var time_ago_text = date_format.text.replace(/\$(\w+)/g, function () {
      return breakdown[arguments[1]];
    });
    return depluralize_time_ago_text(time_ago_text, breakdown);
  }

  function depluralize_time_ago_text(time_ago_text, breakdown) {
    for (var i in breakdown) {
      if (breakdown[i] == 1) {
        var regexp = new RegExp("\\b" + i + "\\b");
        time_ago_text = time_ago_text.replace(regexp, function () {
          return arguments[0].replace(/s\b/g, "");
        });
      }
    }
    return time_ago_text;
  }

  return render_date(get_format());
}
