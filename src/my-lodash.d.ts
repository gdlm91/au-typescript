declare module "lodash" {

    interface FirstFunction {
        (data: any[]): any;
    }

    interface Lodash {
        first: FirstFunction;
    }

    export const _: Lodash;
}
