const textbox_output = {
  html: `<div class="output_text h-10 px-3 border bg-white border-gray-200 rounded-lg shadow-inner outline-none focus:ring-1 focus:ring-inset focus:ring-indigo-200 dark:focus:ring-indigo-50 focus:shadow-inner placeholder-gray-400 dark:bg-gray-925"></div>`,
  init: function(opts) {
  },
  output: function(data) {
    this.target.find(".output_text").text(data);
  },
  submit: function() {
  },
  clear: function() {
    this.target.find(".output_text").empty();
  },
  load_example_preview: function(data) {
    if (typeof data == "string" && data.length > 20) {
      return data.substring(0,20) + "...";
    }
    return data;
  },
}
