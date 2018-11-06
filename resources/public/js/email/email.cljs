(ns email.email
  "
  This is the main cljs.email page
  "
  (:require
    [clojure.string :as string]
    [reagent.core :as r]
    [garden.core :as gc :refer [css style]]
    [garden.compiler :as c]
    [garden.color :as color :refer [hsl rgb rgba hex->rgb as-hex]]
    [garden.units :as u :refer [px pt em ms percent defunit]]
    [garden.types :as gt]))

(defn
  make-header
  "
  This function creates a header for the email
  "
  [{:keys [:header-text]}]
  [:div {:id "background"
         :style
             {:background   "black" :height "20vh" :color "white" :text-align "right"
              :padding-left "5%" :padding-right "5%" :padding-top "2%"
              :display      "table" :width "90%"}}
   [:div {:style
          {:display    "table-cell" :vertical-align "middle"
           :font-style "italic" :font-size "2vh"}}

    [:div {:id "logo"
           :style
               {
                :width          "10vw"
                :height         "100px"
                :background     "white"
                :display        "inline-block"
                :float          "left"
                :vertical-align "middle"
                }}]
    [:h1 (str header-text)]
    [:div {:style {
                   :font-style     "normal"
                   :font-size      "5vh"
                   :display        "table-cell"
                   :vertical-align "middle"
                   :float          "right"
                   :padding-bottom "3%"
                   }} "Obrizum sign in service"]

    ]
   ])
(defn
  make-body
  "
  This function creates the body of the email, with the message and the link
  "
  [{:keys [:text]}]
  [:div
   {:id    "body"
    :style {
            :colour     "black"
            :font-size  "2vh"
            :padding    "5%"
            :background "transparent"
            :height     "20vh"
            :width      "auto"
            :font-family "Work Sans, sans-serif"

            }
    }
   [:p (str text)]
   [:a {:href "https://www.obrizum.com/" :style {:color "blue"}} "https://www.obrizum.com/signin_ref=fdsafdksfjoainasdlkfndsosdefea" ]
   ]

  )
(defn make-details
  "
  This function displays the user name and password of the newly registered user. Must take in the username and temporary password as arguments from the server
  "
  [{:keys [:username :password]}]

  [:div  {
          :id "details"
          :style {
                  :background "transparent"
                  :line-height "1.7em"
                  :font-size "2vh"
                  :padding "5%"
                  :padding-top "2%"
                  :width "fit-content"
                  :margin-left "5vw"
                  :border-bottom "1px solid rgb(229, 232, 232)"
                  :border-right "1px solid rgb(229, 232, 232)"
                  ;:border-left "1px solid rgb(229, 232, 232)"
                  :font-family "Work Sans, sans-serif"
                  :box-shadow "1px 1px 20px rgb(229, 232, 232)"
                  }
          }
   "Just so you don't forget, here are your details: "
   [:ul    {:style {:list-style "none"}}
    [:li (str "Username: " username)]
    [:li (str "Temporary password: " password)]
    ]

   ]

  )

(defn all-functions []
  [:div
   [make-header {:header-text "Welcome to the"}]
   [make-body {:text "Thank you for signing up to Obrizum learning platform. Your account has been created,
    now all you have to do is activate it by clicking on the link below:"}]
   [make-details {:username "BioBoffin94" :password "Qwerty122333!"}]
   ]
  )


(r/render [all-functions]

          (.getElementById js/document "app"))

