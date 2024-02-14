require("./index.css");
var $4bZgj$reactjsxruntime = require("react/jsx-runtime");
var $4bZgj$reactdomclient = require("react-dom/client");
var $4bZgj$reactbootstrapContainer = require("react-bootstrap/Container");
var $4bZgj$react = require("react");
var $4bZgj$reactrouterdom = require("react-router-dom");
var $4bZgj$reactbootstrap = require("react-bootstrap");
var $4bZgj$proptypes = require("prop-types");


function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}










const $06af47a1f2f10f82$export$9bd698419030e459 = ({ movie: movie, token: token, setUser: setUser, user: user })=>{
    const handleFavorites = ()=>{
        fetch(`https://jimmys-flix-bfa74c78fd67.herokuapp.com/users/${user.Username}/movies/${movie.id}`, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
            }
        }).then((response)=>{
            if (!response.ok) throw new Error("Failed to add to favorites");
            return response.json();
        }).then((updatedUser)=>{
            setUser(updatedUser);
            alert(`${movie.title} added to favorites!`);
        }).catch((error)=>{
            console.error("Error adding movie to favorites:", error);
            alert("Could not add movie to favorites.");
        });
    };
    const handleRemoveFromFavorites = ()=>{
        fetch(`https://jimmys-flix-bfa74c78fd67.herokuapp.com/users/${user.Username}/movies/${movie.id}`, {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json"
            }
        }).then((response)=>{
            if (!response.ok) throw new Error("Failed to remove from favorites");
            return response.json();
        }).then((updatedUser)=>{
            setUser(updatedUser);
            alert(`${movie.title} removed from favorites!`);
        }).catch((error)=>{
            console.error("Error removing movie from favorites:", error);
            alert("Could not remove movie from favorites.");
        });
    };
    const isFavorite = user.FavoriteMovies.find((movieId)=>movie.id === movieId);
    return /*#__PURE__*/ (0, $4bZgj$reactjsxruntime.jsx)((0, $4bZgj$reactbootstrap.Col), {
        md: 3,
        lg: 2,
        className: "mb-3",
        children: /*#__PURE__*/ (0, $4bZgj$reactjsxruntime.jsxs)((0, $4bZgj$reactbootstrap.Card), {
            className: "h-100",
            children: [
                /*#__PURE__*/ (0, $4bZgj$reactjsxruntime.jsx)((0, $4bZgj$reactbootstrap.Card).Img, {
                    variant: "top",
                    src: movie.image,
                    style: {
                        objectFit: "cover",
                        height: "100%"
                    }
                }),
                /*#__PURE__*/ (0, $4bZgj$reactjsxruntime.jsxs)((0, $4bZgj$reactbootstrap.Card).Body, {
                    children: [
                        /*#__PURE__*/ (0, $4bZgj$reactjsxruntime.jsx)((0, $4bZgj$reactbootstrap.Card).Title, {
                            children: movie.title
                        }),
                        /*#__PURE__*/ (0, $4bZgj$reactjsxruntime.jsx)((0, $4bZgj$reactbootstrap.Card).Text, {
                            children: movie.director
                        }),
                        /*#__PURE__*/ (0, $4bZgj$reactjsxruntime.jsx)((0, $4bZgj$reactrouterdom.Link), {
                            to: `/movies/${encodeURIComponent(movie.id)}`,
                            children: /*#__PURE__*/ (0, $4bZgj$reactjsxruntime.jsx)((0, $4bZgj$reactbootstrap.Button), {
                                variant: "link",
                                children: "Open"
                            })
                        }),
                        isFavorite ? /*#__PURE__*/ (0, $4bZgj$reactjsxruntime.jsx)((0, $4bZgj$reactbootstrap.Button), {
                            variant: "danger",
                            onClick: handleRemoveFromFavorites,
                            children: "Remove from Favorites"
                        }) : /*#__PURE__*/ (0, $4bZgj$reactjsxruntime.jsx)((0, $4bZgj$reactbootstrap.Button), {
                            variant: "primary",
                            onClick: handleFavorites,
                            children: "Add to Favorites"
                        })
                    ]
                })
            ]
        })
    });
};
$06af47a1f2f10f82$export$9bd698419030e459.propTypes = {
    movie: (0, ($parcel$interopDefault($4bZgj$proptypes))).shape({
        id: (0, ($parcel$interopDefault($4bZgj$proptypes))).string.isRequired,
        title: (0, ($parcel$interopDefault($4bZgj$proptypes))).string.isRequired,
        image: (0, ($parcel$interopDefault($4bZgj$proptypes))).string,
        director: (0, ($parcel$interopDefault($4bZgj$proptypes))).string
    }).isRequired
};






const $59a140e02d7d3f6f$export$78d497080ea8f89a = ({ movie: movie })=>{
    return /*#__PURE__*/ (0, $4bZgj$reactjsxruntime.jsx)("div", {
        className: "container mt-4",
        children: /*#__PURE__*/ (0, $4bZgj$reactjsxruntime.jsxs)("div", {
            className: "row",
            children: [
                /*#__PURE__*/ (0, $4bZgj$reactjsxruntime.jsx)("div", {
                    className: "col-lg-4 col-md-6 mx-auto",
                    children: /*#__PURE__*/ (0, $4bZgj$reactjsxruntime.jsx)("img", {
                        src: movie.image,
                        alt: `${movie.title} cover`,
                        className: "img-fluid"
                    })
                }),
                /*#__PURE__*/ (0, $4bZgj$reactjsxruntime.jsx)("div", {
                    className: "col-md-6",
                    children: /*#__PURE__*/ (0, $4bZgj$reactjsxruntime.jsx)("div", {
                        className: "card",
                        children: /*#__PURE__*/ (0, $4bZgj$reactjsxruntime.jsxs)("div", {
                            className: "card-body",
                            children: [
                                /*#__PURE__*/ (0, $4bZgj$reactjsxruntime.jsx)("h5", {
                                    className: "card-title",
                                    children: movie.title
                                }),
                                /*#__PURE__*/ (0, $4bZgj$reactjsxruntime.jsxs)("p", {
                                    className: "card-text",
                                    children: [
                                        /*#__PURE__*/ (0, $4bZgj$reactjsxruntime.jsx)("strong", {
                                            children: "Director:"
                                        }),
                                        " ",
                                        movie.director
                                    ]
                                }),
                                /*#__PURE__*/ (0, $4bZgj$reactjsxruntime.jsxs)("p", {
                                    className: "card-text",
                                    children: [
                                        /*#__PURE__*/ (0, $4bZgj$reactjsxruntime.jsx)("strong", {
                                            children: "Description:"
                                        }),
                                        " ",
                                        movie.description
                                    ]
                                }),
                                /*#__PURE__*/ (0, $4bZgj$reactjsxruntime.jsx)((0, $4bZgj$reactrouterdom.Link), {
                                    to: "/",
                                    className: "btn btn-primary",
                                    children: "Back"
                                })
                            ]
                        })
                    })
                })
            ]
        })
    });
};
$59a140e02d7d3f6f$export$78d497080ea8f89a.propTypes = {
    movie: (0, ($parcel$interopDefault($4bZgj$proptypes))).shape({
        title: (0, ($parcel$interopDefault($4bZgj$proptypes))).string,
        director: (0, ($parcel$interopDefault($4bZgj$proptypes))).string,
        description: (0, ($parcel$interopDefault($4bZgj$proptypes))).string,
        image: (0, ($parcel$interopDefault($4bZgj$proptypes))).string
    }).isRequired
};





const $32cdb56ac8ae105d$export$1582048ca8384970 = ({ onLoggedIn: onLoggedIn })=>{
    const [username, setUsername] = (0, $4bZgj$react.useState)("");
    const [password, setPassword] = (0, $4bZgj$react.useState)("");
    const handleSubmit = (event)=>{
        event.preventDefault();
        const data = {
            Username: username,
            Password: password
        };
        fetch("https://jimmys-flix-bfa74c78fd67.herokuapp.com/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        }).then((response)=>response.json()).then((data)=>{
            if (data.user) {
                localStorage.setItem("user", JSON.stringify(data.user));
                localStorage.setItem("token", data.token);
                onLoggedIn(data.user, data.token);
            } else alert("No such user");
        }).catch((e)=>{
            console.error("Login error: ", e);
        });
    };
    return /*#__PURE__*/ (0, $4bZgj$reactjsxruntime.jsxs)((0, $4bZgj$reactbootstrap.Container), {
        className: "mt-5",
        children: [
            /*#__PURE__*/ (0, $4bZgj$reactjsxruntime.jsx)("h2", {
                children: "Login"
            }),
            /*#__PURE__*/ (0, $4bZgj$reactjsxruntime.jsxs)((0, $4bZgj$reactbootstrap.Form), {
                onSubmit: handleSubmit,
                children: [
                    /*#__PURE__*/ (0, $4bZgj$reactjsxruntime.jsxs)((0, $4bZgj$reactbootstrap.Form).Group, {
                        controlId: "formUsername",
                        children: [
                            /*#__PURE__*/ (0, $4bZgj$reactjsxruntime.jsx)((0, $4bZgj$reactbootstrap.Form).Label, {
                                children: "Username"
                            }),
                            /*#__PURE__*/ (0, $4bZgj$reactjsxruntime.jsx)((0, $4bZgj$reactbootstrap.Form).Control, {
                                type: "text",
                                value: username,
                                onChange: (e)=>setUsername(e.target.value),
                                required: true
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, $4bZgj$reactjsxruntime.jsxs)((0, $4bZgj$reactbootstrap.Form).Group, {
                        controlId: "formPassword",
                        children: [
                            /*#__PURE__*/ (0, $4bZgj$reactjsxruntime.jsx)((0, $4bZgj$reactbootstrap.Form).Label, {
                                children: "Password"
                            }),
                            /*#__PURE__*/ (0, $4bZgj$reactjsxruntime.jsx)((0, $4bZgj$reactbootstrap.Form).Control, {
                                type: "password",
                                value: password,
                                onChange: (e)=>setPassword(e.target.value),
                                required: true
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, $4bZgj$reactjsxruntime.jsx)((0, $4bZgj$reactbootstrap.Button), {
                        variant: "primary",
                        type: "submit",
                        children: "Submit"
                    })
                ]
            })
        ]
    });
};





const $a0b032b87cb1168d$export$25f3896ea1e09820 = ()=>{
    const [username, setUsername] = (0, $4bZgj$react.useState)("");
    const [password, setPassword] = (0, $4bZgj$react.useState)("");
    const [email, setEmail] = (0, $4bZgj$react.useState)("");
    const [birthday, setBirthday] = (0, $4bZgj$react.useState)("");
    const handleSubmit = (event)=>{
        event.preventDefault();
        const data = {
            Username: username,
            Password: password,
            Email: email,
            Birthday: birthday
        };
        fetch("https://jimmys-flix-bfa74c78fd67.herokuapp.com/users", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }).then((response)=>{
            if (response.ok) {
                alert("Signup successful");
                window.location.reload();
            } else alert("Signup failed");
        });
    };
    return /*#__PURE__*/ (0, $4bZgj$reactjsxruntime.jsxs)((0, $4bZgj$reactbootstrap.Container), {
        className: "mt-5",
        children: [
            /*#__PURE__*/ (0, $4bZgj$reactjsxruntime.jsx)("h2", {
                children: "Sign Up"
            }),
            /*#__PURE__*/ (0, $4bZgj$reactjsxruntime.jsxs)((0, $4bZgj$reactbootstrap.Form), {
                onSubmit: handleSubmit,
                children: [
                    /*#__PURE__*/ (0, $4bZgj$reactjsxruntime.jsxs)((0, $4bZgj$reactbootstrap.Form).Group, {
                        controlId: "formUsername",
                        children: [
                            /*#__PURE__*/ (0, $4bZgj$reactjsxruntime.jsx)((0, $4bZgj$reactbootstrap.Form).Label, {
                                children: "Username"
                            }),
                            /*#__PURE__*/ (0, $4bZgj$reactjsxruntime.jsx)((0, $4bZgj$reactbootstrap.Form).Control, {
                                type: "text",
                                value: username,
                                onChange: (e)=>setUsername(e.target.value),
                                required: true,
                                minLength: "3"
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, $4bZgj$reactjsxruntime.jsxs)((0, $4bZgj$reactbootstrap.Form).Group, {
                        controlId: "formPassword",
                        children: [
                            /*#__PURE__*/ (0, $4bZgj$reactjsxruntime.jsx)((0, $4bZgj$reactbootstrap.Form).Label, {
                                children: "Password"
                            }),
                            /*#__PURE__*/ (0, $4bZgj$reactjsxruntime.jsx)((0, $4bZgj$reactbootstrap.Form).Control, {
                                type: "password",
                                value: password,
                                onChange: (e)=>setPassword(e.target.value),
                                required: true
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, $4bZgj$reactjsxruntime.jsxs)((0, $4bZgj$reactbootstrap.Form).Group, {
                        controlId: "formEmail",
                        children: [
                            /*#__PURE__*/ (0, $4bZgj$reactjsxruntime.jsx)((0, $4bZgj$reactbootstrap.Form).Label, {
                                children: "Email"
                            }),
                            /*#__PURE__*/ (0, $4bZgj$reactjsxruntime.jsx)((0, $4bZgj$reactbootstrap.Form).Control, {
                                type: "email",
                                value: email,
                                onChange: (e)=>setEmail(e.target.value),
                                required: true
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, $4bZgj$reactjsxruntime.jsxs)((0, $4bZgj$reactbootstrap.Form).Group, {
                        controlId: "formBirthday",
                        children: [
                            /*#__PURE__*/ (0, $4bZgj$reactjsxruntime.jsx)((0, $4bZgj$reactbootstrap.Form).Label, {
                                children: "Birthday"
                            }),
                            /*#__PURE__*/ (0, $4bZgj$reactjsxruntime.jsx)((0, $4bZgj$reactbootstrap.Form).Control, {
                                type: "date",
                                value: birthday,
                                onChange: (e)=>setBirthday(e.target.value),
                                required: true
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, $4bZgj$reactjsxruntime.jsx)((0, $4bZgj$reactbootstrap.Button), {
                        variant: "primary",
                        type: "submit",
                        children: "Submit"
                    })
                ]
            })
        ]
    });
};







const $bca8ed218874ca2d$export$b378b4d12a0dcbde = ({ user: user, token: token, setUser: setUser, movies: movies })=>{
    const [editMode, setEditMode] = (0, $4bZgj$react.useState)(false);
    if (!user) return /*#__PURE__*/ (0, $4bZgj$reactjsxruntime.jsx)((0, $4bZgj$reactrouterdom.Navigate), {
        to: "/",
        replace: true
    });
    const FavoriteMovies = user.FavoriteMovies ? movies.filter((movie)=>user.FavoriteMovies.includes(movie.id)) : [];
    const handleEdit = ()=>{
        setEditMode(true);
    };
    const handleUpdateUser = (event)=>{
        event.preventDefault();
        const updatedInfo = {
            Username: event.target.username.value,
            Email: event.target.email.value,
            Birthday: event.target.birthday.value
        };
        fetch(`https://jimmys-flix-bfa74c78fd67.herokuapp.com/users/${user.Username}`, {
            method: "PUT",
            body: JSON.stringify(updatedInfo),
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        }).then((response)=>{
            if (!response.ok) throw new Error(`HTTP status ${response.status}`);
            return response.json();
        }).then((updatedUser)=>{
            localStorage.setItem("user", JSON.stringify(updatedUser));
            setUser(updatedUser);
            setEditMode(false);
        }).catch((error)=>{
            console.error("Error updating user:", error);
        });
    };
    const handleDelete = ()=>{
        if (window.confirm("Are you sure you want to delete your profile? This action cannot be undone.")) fetch(`https://jimmys-flix-bfa74c78fd67.herokuapp.com/users/${user.Username}`, {
            method: "DELETE",
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((response)=>{
            if (response.ok) {
                setUser(null);
                localStorage.removeItem("user");
                localStorage.removeItem("token");
                alert("Your account has been deleted");
            } else alert("something went wrong.");
        });
    };
    const handleCancel = ()=>{
        setEditMode(false);
    };
    return /*#__PURE__*/ (0, $4bZgj$reactjsxruntime.jsxs)((0, $4bZgj$reactbootstrap.Container), {
        children: [
            /*#__PURE__*/ (0, $4bZgj$reactjsxruntime.jsx)((0, $4bZgj$reactbootstrap.Row), {
                className: "justify-content-md-center",
                children: /*#__PURE__*/ (0, $4bZgj$reactjsxruntime.jsx)((0, $4bZgj$reactbootstrap.Col), {
                    md: 6,
                    children: /*#__PURE__*/ (0, $4bZgj$reactjsxruntime.jsx)((0, $4bZgj$reactbootstrap.Card), {
                        children: /*#__PURE__*/ (0, $4bZgj$reactjsxruntime.jsx)((0, $4bZgj$reactbootstrap.Card).Body, {
                            children: editMode ? /*#__PURE__*/ (0, $4bZgj$reactjsxruntime.jsxs)((0, $4bZgj$reactbootstrap.Form), {
                                onSubmit: handleUpdateUser,
                                children: [
                                    /*#__PURE__*/ (0, $4bZgj$reactjsxruntime.jsxs)((0, $4bZgj$reactbootstrap.Form).Group, {
                                        controlId: "formUsername",
                                        children: [
                                            /*#__PURE__*/ (0, $4bZgj$reactjsxruntime.jsx)((0, $4bZgj$reactbootstrap.Form).Label, {
                                                children: "Username"
                                            }),
                                            /*#__PURE__*/ (0, $4bZgj$reactjsxruntime.jsx)((0, $4bZgj$reactbootstrap.Form).Control, {
                                                type: "text",
                                                name: "username",
                                                defaultValue: user.Username,
                                                required: true
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0, $4bZgj$reactjsxruntime.jsxs)((0, $4bZgj$reactbootstrap.Form).Group, {
                                        controlId: "formEmail",
                                        children: [
                                            /*#__PURE__*/ (0, $4bZgj$reactjsxruntime.jsx)((0, $4bZgj$reactbootstrap.Form).Label, {
                                                children: "Email"
                                            }),
                                            /*#__PURE__*/ (0, $4bZgj$reactjsxruntime.jsx)((0, $4bZgj$reactbootstrap.Form).Control, {
                                                type: "email",
                                                name: "email",
                                                defaultValue: user.Email,
                                                required: true
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0, $4bZgj$reactjsxruntime.jsxs)((0, $4bZgj$reactbootstrap.Form).Group, {
                                        controlId: "formBirthday",
                                        children: [
                                            /*#__PURE__*/ (0, $4bZgj$reactjsxruntime.jsx)((0, $4bZgj$reactbootstrap.Form).Label, {
                                                children: "Birthday"
                                            }),
                                            /*#__PURE__*/ (0, $4bZgj$reactjsxruntime.jsx)((0, $4bZgj$reactbootstrap.Form).Control, {
                                                type: "date",
                                                name: "birthday",
                                                defaultValue: user.Birthday,
                                                required: true
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0, $4bZgj$reactjsxruntime.jsx)((0, $4bZgj$reactbootstrap.Button), {
                                        variant: "primary",
                                        type: "submit",
                                        children: "Save Changes"
                                    }),
                                    /*#__PURE__*/ (0, $4bZgj$reactjsxruntime.jsx)((0, $4bZgj$reactbootstrap.Button), {
                                        variant: "secondary",
                                        onClick: handleCancel,
                                        children: "Cancel"
                                    })
                                ]
                            }) : /*#__PURE__*/ (0, $4bZgj$reactjsxruntime.jsxs)((0, $4bZgj$reactjsxruntime.Fragment), {
                                children: [
                                    /*#__PURE__*/ (0, $4bZgj$reactjsxruntime.jsx)((0, $4bZgj$reactbootstrap.Card).Title, {
                                        children: "Profile Information"
                                    }),
                                    /*#__PURE__*/ (0, $4bZgj$reactjsxruntime.jsxs)((0, $4bZgj$reactbootstrap.Card).Text, {
                                        children: [
                                            /*#__PURE__*/ (0, $4bZgj$reactjsxruntime.jsx)("strong", {
                                                children: "Username:"
                                            }),
                                            " ",
                                            user.Username
                                        ]
                                    }),
                                    /*#__PURE__*/ (0, $4bZgj$reactjsxruntime.jsxs)((0, $4bZgj$reactbootstrap.Card).Text, {
                                        children: [
                                            /*#__PURE__*/ (0, $4bZgj$reactjsxruntime.jsx)("strong", {
                                                children: "Email:"
                                            }),
                                            " ",
                                            user.Email
                                        ]
                                    }),
                                    /*#__PURE__*/ (0, $4bZgj$reactjsxruntime.jsxs)((0, $4bZgj$reactbootstrap.Card).Text, {
                                        children: [
                                            /*#__PURE__*/ (0, $4bZgj$reactjsxruntime.jsx)("strong", {
                                                children: "Birthday:"
                                            }),
                                            " ",
                                            user.Birthday
                                        ]
                                    }),
                                    /*#__PURE__*/ (0, $4bZgj$reactjsxruntime.jsx)((0, $4bZgj$reactbootstrap.Button), {
                                        variant: "primary",
                                        onClick: handleEdit,
                                        children: "Edit Profile"
                                    }),
                                    /*#__PURE__*/ (0, $4bZgj$reactjsxruntime.jsx)((0, $4bZgj$reactbootstrap.Button), {
                                        variant: "secondary",
                                        onClick: handleDelete,
                                        children: "Delete Profile"
                                    })
                                ]
                            })
                        })
                    })
                })
            }),
            /*#__PURE__*/ (0, $4bZgj$reactjsxruntime.jsxs)((0, $4bZgj$reactbootstrap.Row), {
                className: "justify-content-md-center mx-3 my-4",
                children: [
                    /*#__PURE__*/ (0, $4bZgj$reactjsxruntime.jsx)("h2", {
                        children: "Favorite movies"
                    }),
                    FavoriteMovies.map((movie)=>{
                        return /*#__PURE__*/ (0, $4bZgj$reactjsxruntime.jsx)((0, $06af47a1f2f10f82$export$9bd698419030e459), {
                            className: "m-3",
                            movie: movie,
                            user: user,
                            setUser: setUser,
                            token: token
                        }, movie.id);
                    })
                ]
            })
        ]
    });
};





const $61c95647cc34234c$export$214ae410b202e65a = ({ user: user, handleLogout: handleLogout })=>{
    return /*#__PURE__*/ (0, $4bZgj$reactjsxruntime.jsx)((0, $4bZgj$reactbootstrap.Navbar), {
        bg: "light",
        expand: "lg",
        children: /*#__PURE__*/ (0, $4bZgj$reactjsxruntime.jsxs)((0, $4bZgj$reactbootstrap.Container), {
            children: [
                /*#__PURE__*/ (0, $4bZgj$reactjsxruntime.jsx)((0, $4bZgj$reactbootstrap.Navbar).Brand, {
                    as: (0, $4bZgj$reactrouterdom.Link),
                    to: "/",
                    children: "MyFlix App"
                }),
                /*#__PURE__*/ (0, $4bZgj$reactjsxruntime.jsx)((0, $4bZgj$reactbootstrap.Navbar).Toggle, {
                    "aria-controls": "basic-navbar-nav"
                }),
                /*#__PURE__*/ (0, $4bZgj$reactjsxruntime.jsx)((0, $4bZgj$reactbootstrap.Navbar).Collapse, {
                    id: "basic-navbar-nav",
                    children: /*#__PURE__*/ (0, $4bZgj$reactjsxruntime.jsxs)((0, $4bZgj$reactbootstrap.Nav), {
                        className: "me-auto",
                        children: [
                            !user && /*#__PURE__*/ (0, $4bZgj$reactjsxruntime.jsxs)((0, $4bZgj$reactjsxruntime.Fragment), {
                                children: [
                                    /*#__PURE__*/ (0, $4bZgj$reactjsxruntime.jsx)((0, $4bZgj$reactbootstrap.Nav).Link, {
                                        as: (0, $4bZgj$reactrouterdom.Link),
                                        to: "/login",
                                        children: "Login"
                                    }),
                                    /*#__PURE__*/ (0, $4bZgj$reactjsxruntime.jsx)((0, $4bZgj$reactbootstrap.Nav).Link, {
                                        as: (0, $4bZgj$reactrouterdom.Link),
                                        to: "/signup",
                                        children: "Signup"
                                    })
                                ]
                            }),
                            user && /*#__PURE__*/ (0, $4bZgj$reactjsxruntime.jsxs)((0, $4bZgj$reactjsxruntime.Fragment), {
                                children: [
                                    /*#__PURE__*/ (0, $4bZgj$reactjsxruntime.jsx)((0, $4bZgj$reactbootstrap.Nav).Link, {
                                        as: (0, $4bZgj$reactrouterdom.Link),
                                        to: "/",
                                        children: "Home"
                                    }),
                                    /*#__PURE__*/ (0, $4bZgj$reactjsxruntime.jsx)((0, $4bZgj$reactbootstrap.Nav).Link, {
                                        as: (0, $4bZgj$reactrouterdom.Link),
                                        to: "/profile",
                                        children: "Profile"
                                    }),
                                    /*#__PURE__*/ (0, $4bZgj$reactjsxruntime.jsx)((0, $4bZgj$reactbootstrap.Nav).Link, {
                                        onClick: handleLogout,
                                        children: "Logout"
                                    })
                                ]
                            })
                        ]
                    })
                })
            ]
        })
    });
};




const $01e97d27e31a8b54$var$SearchBar = ({ onSearch: onSearch })=>{
    return /*#__PURE__*/ (0, $4bZgj$reactjsxruntime.jsx)("input", {
        type: "text",
        className: "form-control",
        placeholder: "Search movies by name...",
        onChange: (e)=>onSearch(e.target.value)
    });
};
var $01e97d27e31a8b54$export$2e2bcd8739ae039 = $01e97d27e31a8b54$var$SearchBar;



const $8127f60f8fb17a9c$export$fa32cd27347e212e = ()=>{
    const storedUser = JSON.parse(localStorage.getItem("user"));
    const storedToken = localStorage.getItem("token");
    const [user, setUser] = (0, $4bZgj$react.useState)(storedUser ? storedUser : null);
    const [token, setToken] = (0, $4bZgj$react.useState)(storedToken ? storedToken : null);
    const [movies, setMovies] = (0, $4bZgj$react.useState)([]);
    const [searchQuery, setSearchQuery] = (0, $4bZgj$react.useState)("");
    const filteredMovies = searchQuery.length === 0 ? movies : movies.filter((movie)=>movie.title.toLowerCase().includes(searchQuery.toLowerCase()));
    (0, $4bZgj$react.useEffect)(()=>{
        if (!token) return;
        fetch("https://jimmys-flix-bfa74c78fd67.herokuapp.com/movies", {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then((response)=>response.json()).then((data)=>{
            setMovies(data.map((movie)=>({
                    id: movie._id,
                    title: movie.Title,
                    director: movie.Director.Name,
                    description: movie.Description,
                    genre: movie.Genre.Name,
                    image: movie.ImagePath
                })));
        }).catch((error)=>{
            console.error("Error fetching movies:", error);
        });
    }, [
        token
    ]);
    const handleLogout = ()=>{
        setUser(null);
        setToken(null);
        localStorage.clear();
    };
    const MovieDetailView = ()=>{
        const { id: id } = (0, $4bZgj$reactrouterdom.useParams)();
        const movie = movies.find((movie)=>movie.id === id);
        return movie ? /*#__PURE__*/ (0, $4bZgj$reactjsxruntime.jsx)((0, $59a140e02d7d3f6f$export$78d497080ea8f89a), {
            movie: movie
        }) : /*#__PURE__*/ (0, $4bZgj$reactjsxruntime.jsx)("div", {
            children: "Loading..."
        });
    };
    return /*#__PURE__*/ (0, $4bZgj$reactjsxruntime.jsxs)((0, $4bZgj$reactrouterdom.BrowserRouter), {
        children: [
            /*#__PURE__*/ (0, $4bZgj$reactjsxruntime.jsx)((0, $61c95647cc34234c$export$214ae410b202e65a), {
                user: user,
                setToken: setToken,
                setUser: setUser,
                handleLogout: handleLogout
            }),
            /*#__PURE__*/ (0, $4bZgj$reactjsxruntime.jsx)((0, $01e97d27e31a8b54$export$2e2bcd8739ae039), {
                onSearch: setSearchQuery
            }),
            /*#__PURE__*/ (0, $4bZgj$reactjsxruntime.jsx)((0, $4bZgj$reactbootstrap.Row), {
                className: "justify-content-md-center my-4",
                children: /*#__PURE__*/ (0, $4bZgj$reactjsxruntime.jsxs)((0, $4bZgj$reactrouterdom.Routes), {
                    children: [
                        /*#__PURE__*/ (0, $4bZgj$reactjsxruntime.jsx)((0, $4bZgj$reactrouterdom.Route), {
                            path: "/login",
                            element: user ? /*#__PURE__*/ (0, $4bZgj$reactjsxruntime.jsx)((0, $4bZgj$reactrouterdom.Navigate), {
                                to: "/"
                            }) : /*#__PURE__*/ (0, $4bZgj$reactjsxruntime.jsx)((0, $4bZgj$reactbootstrap.Col), {
                                md: 5,
                                children: /*#__PURE__*/ (0, $4bZgj$reactjsxruntime.jsx)((0, $32cdb56ac8ae105d$export$1582048ca8384970), {
                                    onLoggedIn: (user, token)=>{
                                        setUser(user);
                                        setToken(token);
                                    }
                                })
                            })
                        }),
                        /*#__PURE__*/ (0, $4bZgj$reactjsxruntime.jsx)((0, $4bZgj$reactrouterdom.Route), {
                            path: "/signup",
                            element: user ? /*#__PURE__*/ (0, $4bZgj$reactjsxruntime.jsx)((0, $4bZgj$reactrouterdom.Navigate), {
                                to: "/"
                            }) : /*#__PURE__*/ (0, $4bZgj$reactjsxruntime.jsx)((0, $4bZgj$reactbootstrap.Col), {
                                md: 5,
                                children: /*#__PURE__*/ (0, $4bZgj$reactjsxruntime.jsx)((0, $a0b032b87cb1168d$export$25f3896ea1e09820), {})
                            })
                        }),
                        /*#__PURE__*/ (0, $4bZgj$reactjsxruntime.jsx)((0, $4bZgj$reactrouterdom.Route), {
                            path: "/movies/:id",
                            element: !user ? /*#__PURE__*/ (0, $4bZgj$reactjsxruntime.jsx)((0, $4bZgj$reactrouterdom.Navigate), {
                                to: "/login",
                                replace: true
                            }) : /*#__PURE__*/ (0, $4bZgj$reactjsxruntime.jsx)(MovieDetailView, {})
                        }),
                        /*#__PURE__*/ (0, $4bZgj$reactjsxruntime.jsx)((0, $4bZgj$reactrouterdom.Route), {
                            path: "/",
                            element: !user ? /*#__PURE__*/ (0, $4bZgj$reactjsxruntime.jsx)((0, $4bZgj$reactrouterdom.Navigate), {
                                to: "/login",
                                replace: true
                            }) : /*#__PURE__*/ (0, $4bZgj$reactjsxruntime.jsx)((0, $4bZgj$reactbootstrap.Col), {
                                children: /*#__PURE__*/ (0, $4bZgj$reactjsxruntime.jsx)((0, $4bZgj$reactbootstrap.Row), {
                                    children: filteredMovies.length > 0 ? filteredMovies.map((movie)=>/*#__PURE__*/ (0, $4bZgj$reactjsxruntime.jsx)((0, $06af47a1f2f10f82$export$9bd698419030e459), {
                                            movie: movie,
                                            user: user,
                                            token: token,
                                            setUser: setUser
                                        }, movie.id)) : /*#__PURE__*/ (0, $4bZgj$reactjsxruntime.jsx)("div", {
                                        children: "The list is empty"
                                    })
                                })
                            })
                        }),
                        /*#__PURE__*/ (0, $4bZgj$reactjsxruntime.jsx)((0, $4bZgj$reactrouterdom.Route), {
                            path: "/profile",
                            element: /*#__PURE__*/ (0, $4bZgj$reactjsxruntime.jsx)((0, $bca8ed218874ca2d$export$b378b4d12a0dcbde), {
                                user: user,
                                setUser: setUser,
                                movies: movies,
                                token: token
                            })
                        })
                    ]
                })
            })
        ]
    });
};




const $91fc7c7f5ab63f5b$var$App = ()=>{
    return /*#__PURE__*/ (0, $4bZgj$reactjsxruntime.jsx)((0, ($parcel$interopDefault($4bZgj$reactbootstrapContainer))), {
        fluid: true,
        children: /*#__PURE__*/ (0, $4bZgj$reactjsxruntime.jsx)((0, $8127f60f8fb17a9c$export$fa32cd27347e212e), {})
    });
};
const $91fc7c7f5ab63f5b$var$container = document.querySelector("#root");
const $91fc7c7f5ab63f5b$var$root = (0, $4bZgj$reactdomclient.createRoot)($91fc7c7f5ab63f5b$var$container);
$91fc7c7f5ab63f5b$var$root.render(/*#__PURE__*/ (0, $4bZgj$reactjsxruntime.jsx)($91fc7c7f5ab63f5b$var$App, {}));


//# sourceMappingURL=index.js.map
