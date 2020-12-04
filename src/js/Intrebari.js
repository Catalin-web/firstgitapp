/** @format */
import React from 'react';

function Intrebari() {
	const intrebari = [
		'Ce descoperire crezi că ar schimba complet viața oamenilor?',
		'Ce înseamnă pentru tine adevărata fericire?',
		'Ce vrei să realizezi în viitor?',
		'Ce-ți place să faci în timpul liber? ',
		'Ce ai schimba la viața ta și de ce?',
		'Ce crezi despre tot ceea ce se întâmplă acum în jurul nostru și cum ne va influența asta în viitor?',
		'Dacă ai avea puterea să schimbi ceva în lume, care ar fi acesta?',
		'Care este cea mai relaxantă situație în care te-ai putea afla?',
		'Ești ceea ce ți-ai dorit să fii?',
		' Cine ești tu atunci nu te vede nimeni?',
		'Dacă ai putea să te întorci în trecut, ce ai schimba la acesta?',
		'Unde ai vrea să locuiești și de ce?',
		'Crezi în talent sau în muncă continuă? Care dintre acestea crezi că te ajută mai mult să realizezi ceea ce îți dorești?',
		'Care este cel mai frumos lucru care ți s-a întâmplat luna aceasta? Vorbește-mi despre el.',
		'Îți place să citești cărți? Ce impact au asupra ta?',
	];
	return (
		<>
			<div className='indiv'>
				<div className='intrebari group'>
					<div className='intrebaridiv col col-6'>
						<span>{intrebari[1]}</span>
					</div>
					<div className='btndiv col col-6'>
						<button>Next</button>
					</div>
				</div>
			</div>
		</>
	);
}

export default Intrebari;
