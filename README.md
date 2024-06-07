# NotifJS

Make a beautiful toast with NotifJS

you can add this code in the end of your ```<head>```

```html
<script type="text/javascript" src="https://bitly.cx/notifjs"></script>
```

And then just use Notif function in your Javascript code

```js
Notif(Text, Color, Time)
```

| Argument | Description                                                  | Default | Values                                                                                   | Type   |
|----------|--------------------------------------------------------------|---------|------------------------------------------------------------------------------------------|--------|
| Text     | The text that is displayed (required)                        | Not set | Everything                                                                               | String |
| Color    | Background color of Notif (required)                         | Primary | "primary", "info", "success", "warning", "danger", "dark", "secondary", "light", "white" | String |
| Time     | Duration for which Notif is displayed in seconds (required)  | 3       | 1 ≤ Time ≤ 120                                                                           | Number |

you can visit examples in [this link][def]

[def]: https://gholamhasanehsani.github.io/NotifJS
