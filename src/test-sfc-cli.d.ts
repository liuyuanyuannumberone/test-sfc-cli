import Vue, {VueConstructor} from 'vue'

/**
 * @FYI https://www.yuque.com/docs/share/a72a1b84-c0e4-4bd5-853f-6711cb08a507
 */
declare module '@liuyuanyuan_npm/test-sfc-cli' {
  class VueComponent extends Vue {
    static install(vue: typeof Vue): void
  }

  type CombinedVueInstance<
    Instance extends Vue,
    Data,
    Methods,
    Computed,
    Props
  > = Data & Methods & Computed & Props & Instance

  type ExtendedVue<
    Instance extends Vue,
    Data,
    Methods,
    Computed,
    Props
  > = VueConstructor<
    CombinedVueInstance<Instance, Data, Methods, Computed, Props> & Vue
  >

  type Combined<Data, Methods, Computed, Props> = Data &
    Methods &
    Computed &
    Props

  type TestSfcCliData = {}

  type TestSfcCliMethods = {}

  type TestSfcCliComputed = {}

  type TestSfcCliProps = {}

  type TestSfcCli = Combined<
    TestSfcCliData,
    TestSfcCliMethods,
    TestSfcCliComputed,
    TestSfcCliProps
  >

  export interface TestSfcCliType extends VueComponent, TestSfcCli {}

  const TestSfcCliConstruction: ExtendedVue<
    Vue,
    TestSfcCliData,
    TestSfcCliMethods,
    TestSfcCliComputed,
    TestSfcCliProps
  >

  export default TestSfcCliConstruction
}
