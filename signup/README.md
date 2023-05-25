
```js
handleSubmit(event) {
        event.preventDefault()
        console.log('handleSubmit')

        axios
            .post('/user/login', {
                username: this.state.username,
                password: this.state.password
            })
            .then(response => {
                console.log('login response: ')
                console.log(response)
                if (response.status === 200) {
                    // update App.js state
                    this.props.updateUser({
                        loggedIn: true,
                        username: response.data.username
                    })
                    // update the state to redirect to home
                    this.setState({
                        redirectTo: '/'
                    })
                }
            }).catch(error => {
                console.log('login error: ')
                console.log(error);

            })
    }


router.post('/login',
    (req, res, next) => {
        console.log('routes/user.js, login, req.body: ')
        console.log(req.body)
        next()
    },
    passport.authenticate('local'),
    (req, res) => {
        console.log('loggedin', req.user);
    /* the  above line is only for debugging and will print the below in Terminal
        logged in { _id: 5b7a79a545de52523ea1a482,
        username: 'rohanpaul2@gmail.com',
        password: '$2a$10$9eC8kXcVduG3885FLT1AweYIYsfvwLUIFJ65lvIvUZQZhcWpL6H0q',
 } */
        var userInfor = {
            username: req.user.username
        };
        res.send(userInfo)
    }
)

```

```js
app.post('/login',
  passport.authenticate('local'),
  function(req, res) {
    // If this function gets called, authentication was successful.
    // `req.user` contains the authenticated user.
    res.redirect('/users/' + req.user.username);
  });
```


```js
