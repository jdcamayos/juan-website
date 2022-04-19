import {
	accessibility,
	AdvancedImage,
	lazyload,
	placeholder,
	responsive,
} from '@cloudinary/react'
import { Cloudinary } from '@cloudinary/url-gen'

export default function ImageCloudinary({ height = 1000, imgName }) {
	const cld = new Cloudinary({
		cloud: {
			cloudName: 'demo',
		},
		url: {
			secure: true,
		},
	})
	console.log(cld)
	const name =
		'v1650332875/jdcamayos-com/GreetingImage_vlhcb9.png'

	let img = myCld().image('sample')
	// console.log(img)

	return (
		<>
			<div style={{ height: `${height}px` }}>
				{/* <AdvancedImage
					cldImg={img}
					plugins={[
						lazyload(),
						responsive(100),
						accessibility(),
						placeholder(),
					]}
				/> */}
			</div>
		</>
	)
}
