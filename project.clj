(defproject sch "jfigueroama.github.io 0.0.1"
  :description "Scripts de apoyo y ejemplos de clojurescript para mi web."
  :dependencies [[org.clojure/clojure "1.9.0-alpha20"]

                 ; Clientes
                 [org.clojure/clojurescript "1.9.908"]
                 [reagent "0.6.0"
                  :exclusions
                  [org.clojure/tools.reader cljsjs/react]
                  ]
                 [binaryage/devtools "0.8.3"]
                 [re-frame "0.10.1" :exclusions [cljsjs/react]]
                 ;[cljsjs/react-with-addons "15.4.2-2"]
                 [cljs-ajax "0.5.8"]
                 ;[cljsjs/material-ui "0.16.4-0"]
                 ;[cljs-react-material-ui "0.2.30" ; "0.2.37"
                  ;:exclusions
                  ;[org.clojure/tools.reader cljsjs/react cljsjs/react-dom]
                  ;]
                 [keybind "2.0.0"]
                 [figwheel-sidecar "0.5.9"]
                 ;[quil "2.6.0"]


                 ; Scripts
                 [cheshire "5.6.3"]    ; json

                 ; Utiles
                 [org.clojure/core.async "0.3.443"]
                 [funcool/cats "2.1.0"]
                 [com.rpl/specter "1.0.1"]
                 [funcool/lentes "1.1.0"]

                 [org.clojure/test.check "0.9.0"]

                 ; Otros
                 [clj-time "0.12.0"]
                 [lein-light-nrepl "0.3.3"]]



  ;:main server.core

  :plugins [[lein-cljsbuild "1.1.4"; :exclusions [[org.clojure/clojure]]
             ]
            [lein-ancient "0.6.10"]]

  :min-lein-version "2.5.3"

  :source-paths ["src"] ;[ "src/clj"]

  :clean-targets
  ^{:protect false}  ["assets/js/"]

  :figwheel {:css-dirs ["assets/css"]
             ;:hawk-options {:watcher :polling}
             }

  :profiles
  {:dev
   {:dependencies [ [binaryage/devtools "0.8.3"] 
                   [devcards "0.2.3" :exclusions [cljsjs/react cljsjs/react-dom]] ]

    :plugins      [ [lein-figwheel "0.5.9"]]}}

   ;:devcards {:dependencies [[binaryage/devtools "0.8.2"]
   ;                          [devcards "0.2.2" :exclusions [cljsjs/react cljsjs/react-dom]]]
   ;           :plugins      [[lein-figwheel "0.5.9"]]}}


  :cljsbuild
  {:builds
   [{:id           "tridev" ; trihorario-edicion-dev
     :source-paths ["src/trihorario/edicion"]
     :figwheel     {:load-warninged-code false}
     :compiler     {:main                 trihorario.edicion.core
                    :output-to            "public/js/trihorario/edicion/app-dev.js"
                    :output-dir           "public/js/trihorario/edicion/out"
                    :asset-path           "/public/js/trihorario/edicion/out"
                    :closure-defines      {goog.DEBUG true}
                    ;:preloads             [devtools.preload]
                    ;:external-config      {:devtools/config
                    ;                       {:features-to-install :all}}
                    :source-map-timestamp true}}
    {:id           "triprod"
     :source-paths ["src/trihorario/edicion"]
     :compiler     {:main            trihorario.edicion.core
                    :output-to       "public/js/trihorario/edicion/app.js"
                    :optimizations   :advanced
                    :closure-defines {goog.DEBUG false}
                    :pretty-print    false}}
    ;; ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;
    {:id           "devcards"
     :source-paths ["src/dc"]
     :figwheel     {;:on-jsload "horario.edicion.core/mount-root"
                    :load-warninged-code true
                    ;:server-port 3450
                    :devcards true}
     :compiler     {:devcards true
                    :main                 dc.core
                    :output-to            "/assets/dc/devcards-dev.js"
                    :output-dir           "/assets/dc/devcards_out"
                    :asset-path           "/assets/dc/devcards_out"
                    :closure-defines      {goog.DEBUG true}
                    :source-map-timestamp true}}

    {:id           "heprod"
     :source-paths ["src/horario/edicion"]
     :compiler     {:main            horario.edicion.core
                    :output-to       "public/js/horario/edicion/app.js"
                    :output-dir      "public/js/horario/edicion"
                    :optimizations   :advanced
                    :closure-defines {goog.DEBUG false}
                    :pretty-print    false}}]}


    ; Edicion x grupos
    ;{:id           "group-dev"
    ; :source-paths ["src/client/"]
    ; :figwheel     {:on-jsload "client.group.core/mount-root"
    ;                :load-warninged-code true
    ;                }
    ; :compiler     {:main                 client.group.core
    ;                :output-to            "public/js/group/app.js"
    ;                :output-dir           "public/js/group/out"
;
;                    :asset-path           "/public/js/group/out"
 ;                   :source-map-timestamp true}}
;
;    {:id           "group-prod"
;     :source-paths ["src/client"]
;     :compiler     {:main            client.group.core
;                    :output-to       "public/js/group/app-prod.js"
;                    :optimizations   :advanced
;                    :closure-defines {goog.DEBUG false}
;                    :pretty-print    false}}




  :repl-options {:nrepl-middleware [lighttable.nrepl.handler/lighttable-ops]})

