# NotifJS

Make a beautiful toast with NotifJS

you can add this [file](https://github.com/gholamhasanEhsani/NotifJS/releases/download/main/notif.js) to your project and then put the following code at the end of your ```<head>``` tag.

```html
<script type="text/javascript" src="./notif.js"></script>
```

And just use the Notif function in your JavaScript code like the example below

```js
Notif(Text, Color, Time);
```

| Argument | Description                                                  | Default | Values                                                                                   | Type   |
|----------|--------------------------------------------------------------|---------|------------------------------------------------------------------------------------------|--------|
| Text     | The text that is displayed (required)                        | Not set | Everything                                                                               | String |
| Color    | Background color of Notif (required)                         | Primary | "primary", "info", "success", "warning", "danger", "dark", "secondary", "light", "white" | String |
| Time     | Duration for which Notif is displayed in seconds (required)  | 3       | 1 ≤ Time ≤ 120                                                                           | Number |

you can visit examples in [this link][def]

[def]: https://gholamhasanehsani.github.io/NotifJS
