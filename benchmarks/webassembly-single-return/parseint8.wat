(func (export "parseLow") (param $high i32) (param $low i32) (result i32)
	(i32.wrap/i64
		(i64.rem_u
			(i64.or
				(i64.shl (i64.extend_u/i32 (get_local $high)) (i64.const 32))
				(i64.extend_u/i32 (get_local $low)))
			(i64.const 1000000000))))

(func (export "parseHigh") (param $high i32) (param $low i32) (result f64)
	(f64.convert_s/i64
		(i64.div_s
			(i64.or
				(i64.shl (i64.extend_u/i32 (get_local $high)) (i64.const 32))
				(i64.extend_u/i32 (get_local $low)))
			(i64.const 1000000000))))
