/*!
 * miniquery
 */

/*
 * ----------------------------------------------------------------------------
 * Element Selector
 * ----------------------------------------------------------------------------
 */
const SweetSelector = {
  select: function (param) {
    return document.querySelectorAll(param)
  }
}

/*
 * -----------------------------------------------------------------------------
 * DOM Manipulators
 * -----------------------------------------------------------------------------
 */
const DOM = {
  hide: function (param) {
    var datas = document.querySelectorAll(param)
    datas.forEach(function (element) {
      element.style.display = 'none'
    });
  },
  show: function (param) {
    var datas = document.querySelectorAll(param)
    datas.forEach(function (element) {
      element.style.display = ''
    });
  },
  addClass: function (param) {
    var datas = document.querySelectorAll(param)
    datas.forEach(function (element) {
      element.classList.add(param)
    });
  },
  removeClass: function (param) {
    var datas = document.querySelectorAll(param)
    datas.forEach(function (element) {
      element.classList.remove(param)
    });
  }
}

/*
 * ----------------------------------------------------------------------------
 * Event Dispatcher
 * ----------------------------------------------------------------------------
 */
const EventDispatcher = {
  on: function (params, eventName, eventHandler) {
    var datas = document.querySelectorAll(params)
    datas.forEach(element => {
      element.addEventListener(eventName, eventHandler)
    })
  },

}

/*
 * ----------------------------------------------------------------------------
 * AJAX Wrapper
 * ----------------------------------------------------------------------------
 */
const AjaxWrapper = {
  request: function(params) {
    var request = new XMLHttpRequest();
    request.open(params.type, params.url, true);

    request.onload = function() {
      if (this.status >= 200 && this.status < 400) {
        params.success = JSON.parse(this.response)
      } else {

      }
    };

    request.onerror =  function() {
      params.fail
    };

    request.send()
  }
}

/*
 * ----------------------------------------------------------------------------
 * Alias miniquery
 * ----------------------------------------------------------------------------
 */

 