window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  }
  location.replace(location.href);