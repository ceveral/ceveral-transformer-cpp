
import {ImportedPackageExpression, TranspileOptions, IResult} from 'ceveral-compiler'
import {QtVisitor} from './visitor'
export * from './visitor';

export default {
	name: 'C++',
	annotations: {
        records: {
            cppmsgpack: {
                arguments: 'boolean'
            },
            doc: {
                arguments: "string"
            }
        },
        properties: {
            cpppointer: {
                arguments: "boolean"
            },
            cpptype: {
                arguments: "{string}"
            },
            doc: {
                arguments: "string"
            }
        }
    },
	transform(ast: ImportedPackageExpression, options:TranspileOptions): Promise<IResult[]> {
		let visitor = new QtVisitor(options);
        
		return Promise.resolve(visitor.parse(ast));
	}
}