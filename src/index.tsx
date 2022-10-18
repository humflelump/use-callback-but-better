import React from "react";
export function useCallbackRef<F extends (...params: any[]) => any>(
  callback: () => F,
  deps: []
): F;
export function useCallbackRef<T1, F extends (...params: any[]) => any>(
  callback: (t1: T1) => F,
  deps: [T1]
): F;
export function useCallbackRef<T1, T2, F extends (...params: any[]) => any>(
  callback: (t1: T1, t2: T2) => F,
  deps: [T1, T2]
): F;
export function useCallbackRef<T1, T2, T3, F extends (...params: any[]) => any>(
  callback: (t1: T1, t2: T2, t3: T3) => F,
  deps: [T1, T2, T3]
): F;
export function useCallbackRef<
  T1,
  T2,
  T3,
  T4,
  F extends (...params: any[]) => any
>(callback: (t1: T1, t2: T2, t3: T3, t4: T4) => F, deps: [T1, T2, T3, T4]): F;
export function useCallbackRef<
  T1,
  T2,
  T3,
  T4,
  T5,
  F extends (...params: any[]) => any
>(
  callback: (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5) => F,
  deps: [T1, T2, T3, T4, T5]
): F;
export function useCallbackRef<
  T1,
  T2,
  T3,
  T4,
  T5,
  T6,
  F extends (...params: any[]) => any
>(
  callback: (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5, t6: T6) => F,
  deps: [T1, T2, T3, T4, T5, T6]
): F;
export function useCallbackRef<
  T1,
  T2,
  T3,
  T4,
  T5,
  T6,
  T7,
  F extends (...params: any[]) => any
>(
  callback: (t1: T1, t2: T2, t3: T3, t4: T4, t5: T5, t6: T6, t7: T7) => F,
  deps: [T1, T2, T3, T4, T5, T6, T7]
): F;
export function useCallbackRef<
  T1,
  T2,
  T3,
  T4,
  T5,
  T6,
  T7,
  T8,
  F extends (...params: any[]) => any
>(
  callback: (
    t1: T1,
    t2: T2,
    t3: T3,
    t4: T4,
    t5: T5,
    t6: T6,
    t7: T7,
    t8: T8
  ) => F,
  deps: [T1, T2, T3, T4, T5, T6, T7, T8]
): F;
export function useCallbackRef<
  T1,
  T2,
  T3,
  T4,
  T5,
  T6,
  T7,
  T8,
  T9,
  F extends (...params: any[]) => any
>(
  callback: (
    t1: T1,
    t2: T2,
    t3: T3,
    t4: T4,
    t5: T5,
    t6: T6,
    t7: T7,
    t8: T8,
    t9: T9
  ) => F,
  deps: [T1, T2, T3, T4, T5, T6, T7, T8, T9]
): F;
export function useCallbackRef<
  T1,
  T2,
  T3,
  T4,
  T5,
  T6,
  T7,
  T8,
  T9,
  T10,
  F extends (...params: any[]) => any
>(
  callback: (
    t1: T1,
    t2: T2,
    t3: T3,
    t4: T4,
    t5: T5,
    t6: T6,
    t7: T7,
    t8: T8,
    t9: T9,
    t10: T10
  ) => F,
  deps: [T1, T2, T3, T4, T5, T6, T7, T8, T9, T10]
): F;
export function useCallbackRef<
  T1,
  T2,
  T3,
  T4,
  T5,
  T6,
  T7,
  T8,
  T9,
  T10,
  T11,
  F extends (...params: any[]) => any
>(
  callback: (
    t1: T1,
    t2: T2,
    t3: T3,
    t4: T4,
    t5: T5,
    t6: T6,
    t7: T7,
    t8: T8,
    t9: T9,
    t10: T10,
    t11: T11
  ) => F,
  deps: [T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11]
): F;
export function useCallbackRef<
  T1,
  T2,
  T3,
  T4,
  T5,
  T6,
  T7,
  T8,
  T9,
  T10,
  T11,
  T12,
  F extends (...params: any[]) => any
>(
  callback: (
    t1: T1,
    t2: T2,
    t3: T3,
    t4: T4,
    t5: T5,
    t6: T6,
    t7: T7,
    t8: T8,
    t9: T9,
    t10: T10,
    t11: T11,
    t12: T12
  ) => F,
  deps: [T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12]
): F;
export function useCallbackRef<
  T1,
  T2,
  T3,
  T4,
  T5,
  T6,
  T7,
  T8,
  T9,
  T10,
  T11,
  T12,
  T13,
  F extends (...params: any[]) => any
>(
  callback: (
    t1: T1,
    t2: T2,
    t3: T3,
    t4: T4,
    t5: T5,
    t6: T6,
    t7: T7,
    t8: T8,
    t9: T9,
    t10: T10,
    t11: T11,
    t12: T12,
    t13: T13
  ) => F,
  deps: [T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13]
): F;
export function useCallbackRef<
  T1,
  T2,
  T3,
  T4,
  T5,
  T6,
  T7,
  T8,
  T9,
  T10,
  T11,
  T12,
  T13,
  T14,
  F extends (...params: any[]) => any
>(
  callback: (
    t1: T1,
    t2: T2,
    t3: T3,
    t4: T4,
    t5: T5,
    t6: T6,
    t7: T7,
    t8: T8,
    t9: T9,
    t10: T10,
    t11: T11,
    t12: T12,
    t13: T13,
    t14: T14
  ) => F,
  deps: [T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14]
): F;
export function useCallbackRef<
  T1,
  T2,
  T3,
  T4,
  T5,
  T6,
  T7,
  T8,
  T9,
  T10,
  T11,
  T12,
  T13,
  T14,
  T15,
  F extends (...params: any[]) => any
>(
  callback: (
    t1: T1,
    t2: T2,
    t3: T3,
    t4: T4,
    t5: T5,
    t6: T6,
    t7: T7,
    t8: T8,
    t9: T9,
    t10: T10,
    t11: T11,
    t12: T12,
    t13: T13,
    t14: T14,
    t15: T15
  ) => F,
  deps: [T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15]
): F;
export function useCallbackRef<
  T1,
  T2,
  T3,
  T4,
  T5,
  T6,
  T7,
  T8,
  T9,
  T10,
  T11,
  T12,
  T13,
  T14,
  T15,
  T16,
  F extends (...params: any[]) => any
>(
  callback: (
    t1: T1,
    t2: T2,
    t3: T3,
    t4: T4,
    t5: T5,
    t6: T6,
    t7: T7,
    t8: T8,
    t9: T9,
    t10: T10,
    t11: T11,
    t12: T12,
    t13: T13,
    t14: T14,
    t15: T15,
    t16: T16
  ) => F,
  deps: [T1, T2, T3, T4, T5, T6, T7, T8, T9, T10, T11, T12, T13, T14, T15, T16]
): F;
export function useCallbackRef<
  T1,
  T2,
  T3,
  T4,
  T5,
  T6,
  T7,
  T8,
  T9,
  T10,
  T11,
  T12,
  T13,
  T14,
  T15,
  T16,
  T17,
  F extends (...params: any[]) => any
>(
  callback: (
    t1: T1,
    t2: T2,
    t3: T3,
    t4: T4,
    t5: T5,
    t6: T6,
    t7: T7,
    t8: T8,
    t9: T9,
    t10: T10,
    t11: T11,
    t12: T12,
    t13: T13,
    t14: T14,
    t15: T15,
    t16: T16,
    t17: T17
  ) => F,
  deps: [
    T1,
    T2,
    T3,
    T4,
    T5,
    T6,
    T7,
    T8,
    T9,
    T10,
    T11,
    T12,
    T13,
    T14,
    T15,
    T16,
    T17
  ]
): F;
export function useCallbackRef<
  T1,
  T2,
  T3,
  T4,
  T5,
  T6,
  T7,
  T8,
  T9,
  T10,
  T11,
  T12,
  T13,
  T14,
  T15,
  T16,
  T17,
  T18,
  F extends (...params: any[]) => any
>(
  callback: (
    t1: T1,
    t2: T2,
    t3: T3,
    t4: T4,
    t5: T5,
    t6: T6,
    t7: T7,
    t8: T8,
    t9: T9,
    t10: T10,
    t11: T11,
    t12: T12,
    t13: T13,
    t14: T14,
    t15: T15,
    t16: T16,
    t17: T17,
    t18: T18
  ) => F,
  deps: [
    T1,
    T2,
    T3,
    T4,
    T5,
    T6,
    T7,
    T8,
    T9,
    T10,
    T11,
    T12,
    T13,
    T14,
    T15,
    T16,
    T17,
    T18
  ]
): F;
export function useCallbackRef<
  T1,
  T2,
  T3,
  T4,
  T5,
  T6,
  T7,
  T8,
  T9,
  T10,
  T11,
  T12,
  T13,
  T14,
  T15,
  T16,
  T17,
  T18,
  T19,
  F extends (...params: any[]) => any
>(
  callback: (
    t1: T1,
    t2: T2,
    t3: T3,
    t4: T4,
    t5: T5,
    t6: T6,
    t7: T7,
    t8: T8,
    t9: T9,
    t10: T10,
    t11: T11,
    t12: T12,
    t13: T13,
    t14: T14,
    t15: T15,
    t16: T16,
    t17: T17,
    t18: T18,
    t19: T19
  ) => F,
  deps: [
    T1,
    T2,
    T3,
    T4,
    T5,
    T6,
    T7,
    T8,
    T9,
    T10,
    T11,
    T12,
    T13,
    T14,
    T15,
    T16,
    T17,
    T18,
    T19
  ]
): F;

export function useCallbackRef(callback, deps) {
  const [ref] = React.useState(deps);
  ref.deps = deps;
  return React.useCallback(
    (...params) => {
      return callback(...ref.deps)(...params);
    },
    [ref]
  );
}

export default useCallbackRef;
