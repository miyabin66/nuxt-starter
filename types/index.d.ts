import Vue from 'vue'
import { Route } from 'vue-router'
import { Store } from 'vuex'
import { AxiosInstance } from 'axios'

interface NuxtContext {
  isClient: boolean
  isServer: boolean
  isStatic: boolean
  isDev: boolean
  isHMR: boolean
  route: Route
  store: Store<any>
  env: object
  query: object
  nuxtState: object
  req: Request
  res: Response
  params: { [key: string]: any }
  redirect: (path: string) => void
  error: (params: { statusCode?: String; message?: String }) => void
  beforeNuxtRender: ({ Conmponents, nuxtState }: { Conmponents: any, nuxtState: any}) => void
  $axios: AxiosInstance
}
