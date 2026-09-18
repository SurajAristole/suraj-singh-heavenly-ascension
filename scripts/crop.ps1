Add-Type -AssemblyName System.Drawing

$inputPath = "c:\Users\HARENDRA SINGH\Desktop\portfolio\public\scroll1and 2.png"
$src = [System.Drawing.Bitmap]::FromFile($inputPath)

$w = [int]($src.Width / 2)
$h = $src.Height

# Left half -> scroll1.png
$rect1 = New-Object System.Drawing.Rectangle(0, 0, $w, $h)
$scroll1 = $src.Clone($rect1, $src.PixelFormat)
$scroll1.Save("c:\Users\HARENDRA SINGH\Desktop\portfolio\public\scroll1.png", [System.Drawing.Imaging.ImageFormat]::Png)
$scroll1.Dispose()

# Right half -> scroll2.png (avoid the center line by starting at w + 1)
$rect2 = New-Object System.Drawing.Rectangle($w, 0, $w, $h)
$scroll2 = $src.Clone($rect2, $src.PixelFormat)
$scroll2.Save("c:\Users\HARENDRA SINGH\Desktop\portfolio\public\scroll2.png", [System.Drawing.Imaging.ImageFormat]::Png)
$scroll2.Dispose()

$src.Dispose()
Write-Host "Done cropping scroll1 and scroll2"
