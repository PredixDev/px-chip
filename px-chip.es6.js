(function() {
  Polymer({

    is: 'px-chip',

    properties: {
      /**
      * The text to display in the chip.
      *
      * @property content
      */
      content: {
        type: String
      },
      /**
      * Set to true to show an icon in the chip, i.e. to create an Actionable Chip.
      *
      * @property selected
      */
      showIcon: {
        type: Boolean,
        value: false
      },
      /**
      * An svg icon from px-icon-set that will be displayed to the right of the
      * text content (if `showIcon` is set to true).
      * If nothing is specified for `icon`, the icon will default to an X (px-utl:close).
      *
      * @property icon
      */
      icon: {
        type: String,
        value: 'px-utl:close'
      },
      /**
      * Set to true to select this chip. This property can be used with a Static Chip.
      *
      * @property selected
      */
      selected: {
        type: Boolean,
        notify: true,
        value: false
      },
      /**
      * Set this property to true when `showIcon` is true. The chip should not
      * be selectable when an icon is showing (i.e. if it is an Actionable Chip).
      *
      * @property notSelectable
      */
      notSelectable: {
        type: Boolean,
        value: false
      },
      /**
      * A reference to this HTML element. Used by iron-a11y-keys.
      *
      * @property _el
      */
      _el: {
        type: HTMLElement
      }
    },
    listeners: {
      'tap': '_handleTapped'
    },
    attached() {
      this.setAttribute("tabindex", "0");
      this._el = this;
    },
    _handleTapped(e) {
      e.stopPropagation();
      if (!this.notSelectable) {
        this.selected = !this.selected;
      }
      /**
       * Event fired when a px-chip is tapped. Use this event to handle toggling
       * (in the case of a selectable chip), or for taking an action (in the case of an actionable chip).
       * The `evt.detail` object will contain current values for certain properties, e.g.
       *
       *      {"content":"Some text", "selected":false}
       * @event px-chip-tapped
       */
      this.fire('px-chip-tapped', {"content":this.content, "selected":this.selected});
    }
  });
})();
