export default function validatorId({ id }: { id: string }) {
	return id.length === 15;
}
